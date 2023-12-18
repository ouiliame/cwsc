use std::marker::PhantomData;

use super::cwsstring::CwsString;
use crate::traits::{CwsType, CwsValue};

pub struct CwsArray<T: CwsType, const N: usize>(pub PhantomData<T>);

impl<T: CwsType, const N: usize> CwsType for CwsArray<T, N> {}

fn test() {
    let myarr = CwsValue::<CwsArray<CwsString, 5>>::new([
        CwsString("hello".to_string()),
        CwsString("world".to_string()),
        CwsString("foo".to_string()),
        CwsString("bar".to_string()),
        CwsString("baz".to_string()),
    ]);

    let bb = CwsValue::<CwsArray<CwsString, 5>>::new([
        CwsString("hello".to_string()),
        CwsString("world".to_string()),
        CwsString("foo".to_string()),
        CwsString("bar".to_string()),
        CwsString("baz".to_string()),
    ]);
}
