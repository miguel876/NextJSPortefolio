import Conclusion from "@/ui/Conclusion";
import Header from "@/ui/Header";
import Introduction from "@/ui/Introduction";
import Projects from "@/ui/Projects";
import Work from "@/ui/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Work />
        <Projects />
        <Conclusion />
      </main>
      <footer></footer>
    </>
  );
}
