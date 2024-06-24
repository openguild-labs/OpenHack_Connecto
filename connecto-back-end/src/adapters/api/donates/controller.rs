use actix_web::{get, web, HttpResponse, Responder, post, put};
use serde::Deserialize;
use crate::adapters::api::channels::channel_dto::{CreateChannelDto, DonateChannelDto, UpdateChannelDto};

pub fn routes(cfg: &mut web::ServiceConfig) {
    cfg.service(get_list_donate_by_user);
    cfg.service(get_list_donate_by_channel);
    cfg.service(donate_channel);
}
#[derive(Deserialize)]
struct GetListDonateResponseDto {
}

#[get("/donates/list_donate_by_user/{user_wallet}")]
async fn get_list_donate_by_user(web::Path(user_wallet): web::Path<String>) -> impl Responder {
    HttpResponse::Ok().body(format!("Get List Donate By User: {}", user_wallet))
}

#[get("/donates/list_donate_by_channel/{channel_id}")]
async fn get_list_donate_by_channel(web::Path(channel_id): web::Path<String>) -> impl Responder {
    HttpResponse::Ok().body(format!("Get List Donate By Channel: {}", channel_id))
}
