use actix_web::{get, web, HttpResponse, Responder, post, put};
use serde::Deserialize;
use crate::adapters::api::channels::channel_dto::{CreateChannelDto, DonateChannelDto, UpdateChannelDto};

pub fn routes(cfg: &mut web::ServiceConfig) {
    cfg.service(get_channels);
    cfg.service(get_channel_by_id);
    cfg.service(create_channel);
    cfg.service(update_channel);
    cfg.service(update_about_me);
    cfg.service(subscribe_channel);
    cfg.service(donate_to_channel);
}
#[get("/channels")]
async fn get_channels() -> impl Responder {
    HttpResponse::Ok().body({})
}

#[get("/channels/{id}")]
async fn get_channel_by_id(web::Path(id): web::Path<String>) -> impl Responder {
    HttpResponse::Ok().body({})
}

#[post("/channels")]
async fn create_channel(channel: web::Json<CreateChannelDto>) -> impl Responder {
    HttpResponse::Ok().body({})
}

#[put("/channels/{id}")]
async fn update_channel(web::Path(id): web::Path<String>, channel: web::Json<UpdateChannelDto>) -> impl Responder {
    HttpResponse::Ok().body({})
}

#[put("/channels/{id}/about_me")]
async fn update_about_me(web::Path(id): web::Path<String>, data: web::Json<UpdateAboutMeChannelDto>) -> impl Responder {
    HttpResponse::Ok().body({})
}

#[post("/channels/{id}/subscribe")]
async fn subscribe_channel(web::Path(id): web::Path<String>) -> impl Responder {
    HttpResponse::Ok().body({})
}

#[post("/channels/donate")]
async fn donate_to_channel(data: web::Json<DonateChannelDto>) -> impl Responder {
    HttpResponse::Ok().body({})
}