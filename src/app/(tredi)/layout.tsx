import {
  NAVIGATION_BAR_HEIGHT,
  SearchNavigationBar,
} from "@/components/SearchNavigationBar";
import "@/styles";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SearchNavigationBar />
      <div style={{ marginTop: NAVIGATION_BAR_HEIGHT }}>{children}</div>
    </div>
  );
}
