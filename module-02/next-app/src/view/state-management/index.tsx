import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LocalStorage from "./section/local-storage";
import SessionStorage from "./section/session-storage";

export default function StateManagementView() {
  return (
    <div className="p-5">
      <Tabs defaultValue="ref">
        <TabsList>
          <TabsTrigger value="local-storage">Local Storage</TabsTrigger>
          <TabsTrigger value="session-storage">Session Storage</TabsTrigger>
        </TabsList>
        <TabsContent value="local-storage">
          <LocalStorage />
        </TabsContent>
        <TabsContent value="session-storage">
          <SessionStorage />
        </TabsContent>
      </Tabs>
    </div>
  );
}
