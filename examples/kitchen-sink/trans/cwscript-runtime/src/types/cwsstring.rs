use crate::traits::{CwsType, CwsValue};

pub struct CwsString(pub String);

impl CwsType for CwsString {}
