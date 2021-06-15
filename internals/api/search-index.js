var searchIndex = JSON.parse('{\
"uniffi":{"doc":"Runtime support code for uniffi","t":[0,0,3,12,12,12,12,11,11,11,11,0,6,17,17,17,3,12,17,11,11,11,0,3,12,12,12,12,11,11,11,11,11,11,11,11,0,3,12,3,12,5,5,5,0,17,5,8,16,10,10,10,10,5,5,5,14,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["ffi","foreignbytes","ForeignBytes","len","data","padding","padding2","from_raw_parts","as_slice","len","is_empty","foreigncallbacks","ForeignCallback","IDX_CALLBACK_FREE","STATIC_ASSERT_USIZE_EQ_FUNC_SIZE","STATIC_ASSERT_USIZE_EQ_OPT_FUNC_SIZE","ForeignCallbackInternals","callback_ptr","EMPTY_PTR","new","set_callback","get_callback","rustbuffer","RustBuffer","capacity","len","data","padding","new","from_raw_parts","len","is_empty","new_with_size","from_vec","destroy_into_vec","destroy","testing","COMPILED_COMPONENTS","__private_field","UNIFFI_BINDGEN","__private_field","run_foreign_language_testcase","ensure_compiled_cdylib","run_uniffi_bindgen_test","deps","PACKAGE_VERSION","check_compatible_version","ViaFfi","FfiType","lower","try_lift","write","try_read","lower_into_buffer","try_lift_from_buffer","check_remaining","assert_compatible_version","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","default","deref","deref","initialize","initialize","ffi_default","into_ffi_value"],"q":["uniffi","uniffi::ffi","uniffi::ffi::foreignbytes","","","","","","","","","uniffi::ffi","uniffi::ffi::foreigncallbacks","","","","","","","","","","uniffi::ffi","uniffi::ffi::rustbuffer","","","","","","","","","","","","","uniffi","uniffi::testing","","","","","","","uniffi","","","","","","","","","","","","","uniffi::ffi::foreignbytes","","","","","","","uniffi::ffi::foreigncallbacks","","","","","","","uniffi::ffi::rustbuffer","","","","","","","uniffi::testing","","","","","","","","","","","","","","uniffi::ffi::rustbuffer","uniffi::testing","","","","uniffi::ffi::rustbuffer",""],"d":["","","Support for reading a slice of foreign-language-allocated …","The length of the pointed-to data. We use an <code>i32</code> for …","The pointer to the foreign-owned bytes.","This forces the struct to be larger than 16 bytes, as a …","","Creates a <code>ForeignBytes</code> from its constituent fields.","View the foreign bytes as a <code>&[u8]</code>.","Get the length of this slice of bytes.","Returns true if the length of this slice of bytes is 0.","Callback interfaces are traits specified in UDL which can …","ForeignCallback is the Rust representation of a foreign …","The method index used by the Drop trait to communicate to …","","","Struct to hold a foreign callback.","","","","","","","Support for passing an allocated-by-Rust buffer of bytes …","The allocated capacity of the underlying <code>Vec<u8></code>. In Rust …","The occupied length of the underlying <code>Vec<u8></code>. In Rust …","The pointer to the allocated buffer of the <code>Vec<u8></code>.","This forces the struct to be larger than 16 bytes, as a …","Creates an empty <code>RustBuffer</code>.","Creates a <code>RustBuffer</code> from its constituent fields.","Get the current length of the buffer, as a <code>usize</code>.","Returns true if the length of the buffer is 0.","Creates a <code>RustBuffer</code> zero-filed to the requested size.","Consumes a <code>Vec<u8></code> and returns its raw parts as a …","Converts this <code>RustBuffer</code> back into an owned <code>Vec<u8></code>.","Reclaim memory stored in this <code>RustBuffer</code>.","Runtime support functionality for testing generated …","","","","","Execute the given foreign-language script as part of a …","Ensure that a uniffi component crate is compiled and …","Execute the <code>uniffi-bindgen test</code> command.","","","Check whether the uniffi runtime version is compatible a …","Trait defining how to transfer values via the FFI layer.","The low-level type used for passing values of this type …","Lower a rust value of the target type, into an FFI value …","Lift a rust value of the target type, from an FFI value …","Write a rust value into a buffer, to send over the FFI in …","Read a rust value from a buffer, received over the FFI in …","A helper function to lower a type by serializing it into …","A helper function to lift a type by deserializing it from …","A helper function to ensure we don’t read past the end …","Assert that the uniffi runtime version matches an …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,2,0,2,2,2,0,0,3,3,3,3,3,3,3,3,3,3,3,3,0,0,4,0,5,0,0,0,0,0,0,0,6,6,6,6,6,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,3,4,5,4,5,3,3],"f":[null,null,null,null,null,null,null,[[["i32",15]]],[[]],[[],["usize",15]],[[],["bool",15]],null,null,null,null,null,null,null,null,[[]],[[["foreigncallback",6]]],[[],[["option",4],["foreigncallback",6]]],null,null,null,null,null,null,[[]],[[["i32",15]]],[[],["usize",15]],[[],["bool",15]],[[["usize",15]]],[[["vec",3],["u8",15]]],[[],[["vec",3],["u8",15]]],[[]],null,null,null,null,null,[[["str",15]],["result",6]],[[["str",15]],[["string",3],["result",6]]],[[["str",15]],["result",6]],null,null,[[["str",15]],["bool",15]],null,null,[[]],[[],["result",6]],[[]],[[],["result",6]],[[["viaffi",8]],["rustbuffer",3]],[[["rustbuffer",3]],[["viaffi",8],["result",6]]],[[["usize",15]],["result",6]],null,[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[],["mutex",3]],[[],["mutex",3]],[[]],[[]],[[]],[[]]],"p":[[3,"ForeignBytes"],[3,"ForeignCallbackInternals"],[3,"RustBuffer"],[3,"COMPILED_COMPONENTS"],[3,"UNIFFI_BINDGEN"],[8,"ViaFfi"]]},\
"uniffi_bindgen":{"doc":"","t":[5],"n":["main"],"q":["uniffi_bindgen"],"d":[""],"i":[0],"f":[[[],["result",6]]],"p":[]},\
"uniffi_build":{"doc":"","t":[5,5],"n":["generate_scaffolding","run_uniffi_bindgen_scaffolding"],"q":["uniffi_build",""],"d":["Generate the rust “scaffolding” required to build a …",""],"i":[0,0],"f":[[[["str",15]],["result",6]],[[["str",15]],["result",6]]],"p":[]},\
"uniffi_macros":{"doc":"Macros for <code>uniffi</code>.","t":[14,3,12,12,14,11,11,11,11,11,11,11,11,11],"n":["build_foreign_language_testcases","FilePaths","udl_file","test_scripts","include_scaffolding","from","into","borrow","borrow_mut","try_from","try_into","type_id","fmt","parse"],"q":["uniffi_macros","","","","","","","","","","","","",""],"d":["A macro to build testcases for a component’s generated …","Newtype to simplifying parsing a list of file paths from …","","","A helper macro to include generated component scaffolding.","","","","","","","","",""],"i":[0,0,1,1,0,1,1,1,1,1,1,1,1,1],"f":[null,null,null,null,null,[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[["formatter",3]],["result",6]],[[["parsestream",6]],["result",6]]],"p":[[3,"FilePaths"]]}\
}');
initSearch(searchIndex);