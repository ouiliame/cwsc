use crate::traits::{CwsType, CwsValue};
use std::{collections::HashMap, marker::PhantomData};

pub struct CwsMap<K: CwsType, V: CwsType>(pub PhantomData<K>, pub PhantomData<V>);
impl<K: CwsType, V: CwsType> CwsType for CwsMap<K, V> {}
