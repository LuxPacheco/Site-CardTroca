/**
 * /preview — renders every section stacked without scroll-driver gaps.
 * Used purely for visual verification. Not linked from the main page.
 */
import { Problem } from "@/components/sections/Problem";
import { Geolocation } from "@/components/sections/Geolocation";
import { MatchSystem } from "@/components/sections/MatchSystem";
import { Search } from "@/components/sections/Search";
import { Wishlist } from "@/components/sections/Wishlist";
import { Chat } from "@/components/sections/Chat";
import { Security } from "@/components/sections/Security";
import { Plans } from "@/components/sections/Plans";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function PreviewPage() {
  return (
    <div className="preview-mode">
      <div id="s-problem"><Problem /></div>
      <div id="s-geo"><Geolocation /></div>
      <div id="s-match"><MatchSystem /></div>
      <div id="s-search"><Search /></div>
      <div id="s-wish"><Wishlist /></div>
      <div id="s-chat"><Chat /></div>
      <div id="s-sec"><Security /></div>
      <div id="s-plans"><Plans /></div>
      <div id="s-cta"><FinalCTA /></div>
    </div>
  );
}
