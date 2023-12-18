use std::marker::PhantomData;

use crate::traits::{CwsType, CwsValue};
pub struct CwsOption<T: CwsType>(pub PhantomData<T>);
pub struct CwsNone;

impl<T: CwsType> CwsType for CwsOption<T> {}

impl CwsType for CwsNone {}

#[cfg(test)]
mod test {
    use crate::traits::*;
    use crate::types::*;

    fn combine_strings(a: CwsOption<CwsString>, b: CwsOption<CwsString>) -> CwsString {
        let c = CwsOption::<CwsString>::value(CwsNone);
        let b = b.get_type();
        if a.id() == b.id() {
            CwsNone.get_type()
        } else {
            CwsNone.get_type()
        }
    }

    #[test]
    fn test_universal_option() {
        let a = CwsString("hello".to_string());
        let b = CwsNone;
    }
}
