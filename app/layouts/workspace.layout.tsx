import { Button } from "@components/button";
import { Image } from "@components/image";
import { Nav } from "@components/nav";

import { MapList } from "@components/map-list";
import { navLinks } from "@utils/nav-links";
import { LogOutIcon } from "lucide-react";

import { Outlet } from "react-router";

export default function WorkspaceLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-zinc-50">
      <header className="flex items-center gap-10 w-full py-4 px-7 shadow-sm">
        <Image.Container>
          <Image.Control
            src="/logo.png"
            alt="Logo da biblioteca Aurora Library"
            className="size-8 p-1.5 rounded-md bg-zinc-900"
          />
					<Image.Fallback>
						<div className="animate-pulse size-8 p-1.5 rounded-md bg-zinc-900" />
					</Image.Fallback>
        </Image.Container>

        <Nav.Container>
          <MapList
            list={navLinks}
            callback={({ icon: Icon, text, to }) => (
              <Nav.Anchor key={text} to={to}>
                <Icon className="size-5" />
                <span>{text}</span>
              </Nav.Anchor>
            )}
          />
        </Nav.Container>

        <Button theme="no-outlined">
          <LogOutIcon className="size-5" />
        </Button>
      </header>

      <main className="flex flex-col flex-1">
        <Outlet />
      </main>
    </div>
  );
}
