extern crate proc_macro;

use proc_macro2;
use quote::{quote, ToTokens};
use syn::{parse_macro_input, DeriveInput};

// attribute macro for implementing all CwsType traits
#[proc_macro_attribute]
pub fn cws_struct(
    _attr: proc_macro::TokenStream,
    input: proc_macro::TokenStream,
) -> proc_macro::TokenStream {
    let input = parse_macro_input!(input as DeriveInput);

    let expanded = cws_struct_impl(input).into_token_stream();
    proc_macro::TokenStream::from(expanded)
}

// // derive macro for CwsType trait
// #[proc_macro_derive(CwsType)]
// pub fn derive_cwstype(input: proc_macro::TokenStream) -> proc_macro::TokenStream {
//     let input = parse_macro_input!(input as DeriveInput);

//     let expanded = cwstype_impl(input).into_token_stream();
//     proc_macro::TokenStream::from(expanded)
// }

/* the CwsType trait should automatically implement the following:
- Serialize, Deserialize, Clone, Debug, PartialEq, Eq, Hash
*/
fn cws_struct_impl(input: DeriveInput) -> proc_macro2::TokenStream {
    let name = &input.ident;

    // TODO: implement struct macro
    let expanded = quote! {
        #input
    };

    expanded
}

#[cfg(test)]
mod tests {
    use super::*;

    // #[test]
    // fn test1() {
    //     let input = syn::parse_quote! {
    //         pub struct CwsString(pub String);
    //     };

    //     let expanded = cwstype_impl(input);
    //     println!("{}", expanded.to_string());
    // }
}
