import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import UseState from "./section/use-state";
import UseEffect from "./section/use-effect";
import UseRef from "./section/use-ref";
import UseMemo from "./section/use-memo";
import UseCallback from "./section/use-callback";
export default function ReactHookView({ nama }: { nama: string }) {
  return (
    <div className="p-5">
      <Tabs defaultValue="ref">
        <TabsList>
          <TabsTrigger value="state">Use State</TabsTrigger>
          <TabsTrigger value="effect">Use Effect</TabsTrigger>
          <TabsTrigger value="ref">Use Ref</TabsTrigger>
          <TabsTrigger value="memo">Use Memo</TabsTrigger>
          <TabsTrigger value="callback">Use Callback</TabsTrigger>
        </TabsList>
        <TabsContent value="state">
          <UseState nama={nama} />
        </TabsContent>
        <TabsContent value="effect">
          <UseEffect nama={nama} />
        </TabsContent>
        <TabsContent value="ref">
          <UseRef nama={nama} />
        </TabsContent>
        <TabsContent value="memo">
          <UseMemo />
        </TabsContent>
        <TabsContent value="callback">
          <UseCallback />
        </TabsContent>
      </Tabs>
    </div>
  );
}
