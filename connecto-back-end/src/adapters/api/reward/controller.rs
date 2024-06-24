use actix_web::{web, App, HttpResponse, HttpServer, Responder, get, post, put, delete};
use serde::Deserialize;

pub fn routes(cfg: &mut web::ServiceConfig) {
    cfg.service(get_task_by_id)
        .service(verify_task)
        .service(create_task)
        .service(update_task)
        .service(delete_post)
}

#[derive(Deserialize)]
struct TaskDetailResponseDto {}

#[derive(Deserialize)]
struct MongoIdDto {}

#[derive(Deserialize)]
struct UserParams {}

#[derive(Deserialize)]
struct CreateTaskDto {}

#[derive(Deserialize)]
struct UpdateTaskDto {}

#[get("/tasks/{id}")]
async fn get_task_by_id(web::Path(id): web::Path<String>) -> impl Responder {
    HttpResponse::Ok().body(format!("Get Task By ID: {}", id))
}

#[post("/tasks/{id}/verify")]
async fn verify_task(web::Path(id): web::Path<String>, user_params: web::Json<UserParams>, body: web::Json<()>) -> impl Responder {
    HttpResponse::Ok().body(format!("Verify Task: {}", id))
}

#[post("/tasks")]
async fn create_task(data_task: web::Json<CreateTaskDto>, user_params: web::Json<UserParams>) -> impl Responder {
    HttpResponse::Ok().body("Create Task")
}

#[put("/tasks/{id}")]
async fn update_task(web::Path(id): web::Path<String>, task: web::Json<UpdateTaskDto>, user_params: web::Json<UserParams>) -> impl Responder {
    HttpResponse::Ok().body(format!("Update Task: {}", id))
}

#[delete("/tasks/{id}")]
async fn delete_post(web::Path(id): web::Path<String>, user_params: web::Json<UserParams>) -> impl Responder {
    HttpResponse::Ok().body(format!("Delete Post: {}", id))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
    })
        .bind("127.0.0.1:8000")?
        .run()
        .await
}