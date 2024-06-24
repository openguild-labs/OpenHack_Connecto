use actix_web::web;

use crate::adapters::api::{channels::channel_controller};

pub fn routes(config: &mut web::ServiceConfig) {
    config
        .service(web::scope("/v1/channels").configure(channel_controller::routes))
}
