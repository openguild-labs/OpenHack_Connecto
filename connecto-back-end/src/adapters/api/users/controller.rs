use actix_web::{web, App, HttpResponse, HttpServer, Responder, get, post, put};
use serde::Deserialize;

pub fn routes(cfg: &mut web::ServiceConfig) {
    cfg.service(get_users)
        .service(connect_discord)
        .service(update_token)
        .service(connect_twitch)
        .service(get_me)
        .service(get_employees_with_schedule_and_office_today)
}

#[derive(Deserialize)]
struct GetUsersDto {}

#[derive(Deserialize)]
struct ConnectDiscordDto {}

#[derive(Deserialize)]
struct ConnectTwitchDto {}

#[derive(Deserialize)]
struct UserParams {}

#[get("/users")]
async fn get_users(query: web::Query<GetUsersDto>) -> impl Responder {
    HttpResponse::Ok().body("Get Users")
}

#[post("/users/sns/discord/connect")]
async fn connect_discord(user_params: web::Json<UserParams>, body: web::Json<ConnectDiscordDto>) -> impl Responder {
    HttpResponse::Ok().body("Connect Discord")
}

#[put("/users/registrar-token")]
async fn update_token(user_params: web::Json<UserParams>, body: web::Json<()>) -> impl Responder {
    HttpResponse::Ok().body("Update Token")
}

#[post("/users/sns/twitch/connect")]
async fn connect_twitch(user_params: web::Json<UserParams>, body: web::Json<ConnectTwitchDto>) -> impl Responder {
    HttpResponse::Ok().body("Connect Twitch")
}

#[get("/users/me")]
async fn get_me(user_params: web::Json<UserParams>) -> impl Responder {
    HttpResponse::Ok().body("Get Me")
}

#[get("/users/{id}/status")]
async fn get_employees_with_schedule_and_office_today(web::Path(id): web::Path<String>) -> impl Responder {
    HttpResponse::Ok().body(format!("Get Employees With Schedule And Office Today: {}", id))
}
