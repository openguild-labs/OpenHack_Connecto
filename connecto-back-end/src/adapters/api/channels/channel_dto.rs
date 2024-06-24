use serde::{Deserialize, Serialize};
use chrono::NaiveDateTime;

#[derive(Debug, Serialize, Deserialize)]
pub struct GetListChannelDto {
    pub sort_condition: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GetListOrderDto {
    pub sort_condition: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GenTransactionDto {
    pub amount: i32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct DonateChannelDto {
    pub amount: i32,
    pub channel_id: String,
    pub date_time_donate: Option<NaiveDateTime>,
    pub transaction_hash: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateChannelDto {
    pub user_type: Option<String>,
    pub email: Option<String>,
    pub name: Option<String>,
    pub channel_name: Option<String>,
    pub description: Option<String>,
    pub date_of_birth: Option<NaiveDateTime>,
    pub discord: Option<String>,
    pub youtube: Option<String>,
    pub x: Option<String>,
    // File handling in Rust is different, you might want to handle it separately
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UpdateChannelDto {
    pub email: Option<String>,
    pub name: Option<String>,
    pub channel_name: Option<String>,
    pub description: Option<String>,
    pub country: Option<String>,
    pub founded: Option<String>,
    pub main_game: Option<String>,
    pub professional_field: Option<String>,
    pub sex: Option<String>,
    pub date_of_birth: Option<NaiveDateTime>,
    pub about_me: Option<String>,
    pub discord: Option<String>,
    pub youtube: Option<String>,
    pub follower_youtube: Option<i32>,
    pub x: Option<String>,
    pub follower_twitter: Option<i32>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UpdateAboutMeChannelDto {
    pub about_me: String,
}