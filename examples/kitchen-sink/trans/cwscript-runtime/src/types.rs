use crate::traits::CwsType;
use num_bigint::{BigInt, BigUint};
use std::collections::HashMap;

pub struct CwsBool(pub bool);
pub struct CwsString(pub String);

pub struct CwsArray<T: CwsType, const N: usize>(pub [T; N]);

pub struct CwsList<T: CwsType>(pub Vec<T>);
pub struct CwsMap<K: CwsType, V: CwsType>(pub HashMap<K, V>);

pub struct CwsInt(pub BigInt);

pub struct CwsUint(pub BigUint);
pub struct CwsNone;

pub struct CwsQueryResponse<T: CwsType>(pub T);
