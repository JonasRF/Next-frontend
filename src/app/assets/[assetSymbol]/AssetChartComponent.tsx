'use client';

import { AssetShow } from "@/app/components/AssetShow";
import { ChartComponent, ChartComponentRef } from "@/app/components/ChartComponent";
import { Asset } from "@/app/models";
import { useRef } from "react";

export function AssetChartComponent(props: { asset: Asset }) {
  const chartRef = useRef<ChartComponentRef>(null);
  return (
    <ChartComponent ref={chartRef} header={<AssetShow asset={props.asset} />} />
  );
}
