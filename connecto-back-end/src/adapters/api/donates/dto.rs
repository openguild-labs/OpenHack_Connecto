use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct GetListDonateDto {
    pub sort_condition: Option<String>,
}