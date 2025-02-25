import { AssetShow } from "@/app/components/AssetShow";
import { TabsItem } from "@/app/components/Tabs";
import { Card, Tabs } from "flowbite-react";

export async function getAsset(symbol: string) {
  const response = await fetch(`http://localhost:3000/assets/${symbol}`);
  return response.json();
}

export default async function AssetDashboard({
  params,
}: {
  params: Promise<{ assetSymbol: string }>;
}) {
  const { assetSymbol } = await params;
  const asset = await getAsset(assetSymbol);

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <div className="flex flex-col space-y-2">
        <AssetShow asset={asset} />
        <div className="ml-2 font-bold text-2xl">{asset.price}</div>
      </div>
      <div className="grid grid-cols-5 flex-grow gap-2">
        <div className="col-span-2">
          <Card>
            <Tabs>
              <TabsItem
                active
                title={<div className="text-blue-700">Comprar</div>}
              ></TabsItem>
              <TabsItem
                title={<div className="text-red-700">Venda</div>}
              ></TabsItem>
            </Tabs>
          </Card>
        </div>
        <div className="col-span-3 flex flex-grow"></div>
      </div>
    </div>
  );
}
