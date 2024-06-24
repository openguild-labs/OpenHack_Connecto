use actix_web::{web, App, HttpResponse, HttpServer, Responder, get, post};
use serde::Deserialize;

pub fn routes(cfg: &mut web::ServiceConfig) {
    cfg.service(mint);

}
#[derive(Deserialize)]
struct MongoIdDto {
}

#[derive(Deserialize)]
struct UserParams {
}

#[post("/posts/{id}/nft/claim")]
async fn mint(web::Path(id): web::Path<String>, user_params: web::Json<UserParams>) -> impl Responder {
    HttpResponse::Ok().body(format!("Mint: {}", id))
}
