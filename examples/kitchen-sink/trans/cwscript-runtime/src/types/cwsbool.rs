use crate::traits::{CwsType, CwsValue};

pub struct CwsBool;

impl CwsType for CwsBool {}

fn test() {
    let a = CwsBool::value(true);
}
