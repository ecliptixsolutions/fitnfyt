import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { loadSupabaseSnapshot, saveSupabaseSnapshot } from "@/lib/supabase-data";
import { useApp } from "@/store/app";

function isUserEditing() {
  const active = document.activeElement;
  if (!active) return false;
  const tagName = active.tagName.toLowerCase();
  return tagName === "input" || tagName === "textarea" || tagName === "select" || active.hasAttribute("contenteditable");
}
export function SupabaseBridge() {
  const loaded = useRef(false);
  const saveTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;

    loadSupabaseSnapshot()
      .then((snapshot) => {
        if (cancelled) return;
        if (
          snapshot.members?.length ||
          snapshot.staff?.length ||
          snapshot.attendance?.length ||
          snapshot.biometricDevices?.length
        ) {
          useApp.setState((state) => ({
            ...state,
            ...snapshot,
          }));
        }
        loaded.current = true;
      })
      .catch((error) => {
        loaded.current = true;
        console.error(error);
        toast.error("Supabase sync failed. Check database setup.");
      });

    const unsubscribe = useApp.subscribe((state) => {
      if (!loaded.current) return;
      window.clearTimeout(saveTimer.current);
      saveTimer.current = window.setTimeout(() => {
        saveSupabaseSnapshot({
          members: state.members,
          staff: state.staff,
          attendance: state.attendance ?? [],
          biometricDevices: state.biometricDevices ?? [],
        }).catch((error) => {
          console.error(error);
          toast.error("Could not save to Supabase");
        });
      }, 1200);
    });

    const interval = window.setInterval(() => {
      if (isUserEditing()) return;
      loadSupabaseSnapshot()
        .then((snapshot) => {
          if (!cancelled && !isUserEditing()) useApp.setState((state) => ({ ...state, ...snapshot }));
        })
        .catch((error) => console.error(error));
    }, 30000);

    return () => {
      cancelled = true;
      unsubscribe();
      window.clearTimeout(saveTimer.current);
      window.clearInterval(interval);
    };
  }, []);

  return null;
}
