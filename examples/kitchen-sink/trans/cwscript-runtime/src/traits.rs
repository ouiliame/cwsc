use crate::types::CwsNone;
use std::marker::PhantomData;
pub trait CwsType {}
pub struct CwsValue<T: CwsType, V>(pub PhantomData<T>, pub V);

pub fn value<T: CwsType, V>(value: V) -> CwsValue<T, V> {
    CwsValue(PhantomData, value)
}

impl<T: CwsType, V> CwsValue<T, V> {
    pub fn new(value: V) -> Self {
        CwsValue(PhantomData, value)
    }

    pub fn is_none(&self) -> bool {
        self.1 == CwsNone
    }
}
