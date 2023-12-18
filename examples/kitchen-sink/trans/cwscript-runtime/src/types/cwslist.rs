use std::marker::PhantomData;

use crate::traits::{CwsType, CwsValue};
pub struct CwsList<T: CwsType>(pub PhantomData<T>);
impl<T: CwsType> CwsType for CwsList<T> {}
