use actix_web::{get, web, HttpResponse, Responder, post, put};
use serde::Deserialize;

pub fn routes(cfg: &mut web::ServiceConfig) {
    cfg.service(get_nft_info_by_id)
        .service(get_nft_info_by_nft_id)
        .service(get_nft_by_user)
        .service(get_channel_collection)
        .service(market_order)
        .service(get_listing_order_id)
        .service(listing_nft_order)
        .service(market_buy_order)
        .service(update_buy_order)
        .service(market_cancel_order)
        .service(get_participated_collection)

}

#[derive(Deserialize)]
struct BuyOrderDto {}

#[derive(Deserialize)]
struct ListingOrderDto {}

#[derive(Deserialize)]
struct GetListOrderDto {}

#[derive(Deserialize)]
struct CancelOrderDto {}

#[get("/nfts/metadata/{id}")]
async fn get_nft_info_by_id(web::Path(id): web::Path<String>) -> impl Responder {
    HttpResponse::Ok().body(format!("Get NFT Info By ID: {}", id))
}

#[get("/nfts/metadata/{collection_addr}/{nft_id}")]
async fn get_nft_info_by_nft_id(web::Path((collection_addr, nft_id)): web::Path<(String, String)>) -> impl Responder {
    HttpResponse::Ok().body(format!("Get NFT Info By NFT ID: {} {}", collection_addr, nft_id))
}

#[get("/nfts/users/{wallet_address}")]
async fn get_nft_by_user(web::Path(wallet_address): web::Path<String>) -> impl Responder {
    HttpResponse::Ok().body(format!("Get NFT By User: {}", wallet_address))
}

#[get("/nfts/channel/{channel_id}")]
async fn get_channel_collection(web::Path(channel_id): web::Path<String>) -> impl Responder {
    HttpResponse::Ok().body(format!("Get Channel Collection: {}", channel_id))
}

#[get("/nfts/market-orders")]
async fn market_order(query: web::Query<GetListOrderDto>) -> impl Responder {
    HttpResponse::Ok().body("Market Order")
}

#[get("/nfts/get-listing-order")]
async fn get_listing_order_id() -> impl Responder {
    HttpResponse::Ok().body("Get Listing Order ID")
}

#[post("/nfts/listing-order")]
async fn listing_nft_order(payload: web::Json<ListingOrderDto>) -> impl Responder {
    HttpResponse::Ok().body("Listing NFT Order")
}

#[post("/nfts/market-buy-order")]
async fn market_buy_order(payload: web::Json<BuyOrderDto>) -> impl Responder {
    HttpResponse::Ok().body("Market Buy Order")
}

#[patch("/nfts/market-buy-order")]
async fn update_buy_order(payload: web::Json<BuyOrderDto>) -> impl Responder {
    HttpResponse::Ok().body("Update Buy Order")
}

#[post("/nfts/market-cancel-order")]
async fn market_cancel_order(payload: web::Json<CancelOrderDto>) -> impl Responder {
    HttpResponse::Ok().body("Market Cancel Order")
}

#[get("/nfts/participated-collection")]
async fn get_participated_collection() -> impl Responder {
    HttpResponse::Ok().body("Get Participated Collection")
}
