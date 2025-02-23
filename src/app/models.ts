export type Asset = {
    _id: string;
    name: string;
    symbol: string;
    price: number;
    image_url: string;
}

export type WalletAsset = {
    _id: string;
    asset: Asset;
    shares: number;
}

export type Wallet = {
    [x: string]: any;
    _id: string;
    assets: WalletAsset[];
}