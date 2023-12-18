extern crate proc_macro;

use proc_macro2;
use quote::{quote, ToTokens};
use syn::{parse_macro_input, DeriveInput};

// derive macro for CwsType trait
#[proc_macro_derive(CwsType)]
pub fn derive_cwstype(input: proc_macro::TokenStream) -> proc_macro::TokenStream {
    let input = parse_macro_input!(input as DeriveInput);

    let expanded = cwstype_impl(input).into_token_stream();
    proc_macro::TokenStream::from(expanded)
}

/* the CwsType trait should automatically implement the following:
- Serialize, Deserialize, Clone, Debug, PartialEq, Eq, Hash
*/
fn cwstype_impl(input: DeriveInput) -> proc_macro2::TokenStream {
    let name = &input.ident;

    let expanded = quote! {
        impl cwscript_runtime::CwsType for #name {
            fn to_string(&self) -> CwsString {
                CwsString(self.to_string())
            }
        }

        impl std::clone::Clone for #name {
            fn clone(&self) -> Self {
                *self
            }
        }

        impl std::cmp::PartialEq for #name {
            fn eq(&self, other: &Self) -> bool {
                self == other
            }
        }

        impl std::cmp::Eq for #name {
        }

        impl std::hash::Hash for #name {
            fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
                self.hash(state);
            }
        }

        impl std::default::Default for #name {
            fn default() -> Self {
                Self::default()
            }
        }
    };

    expanded
}
