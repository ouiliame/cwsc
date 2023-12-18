use crate::types::CwsString;
pub trait CwsType: Default + Clone {
    fn to_string(&self) -> CwsString;
}
