(function() {var implementors = {};
implementors["uniffi_bindgen"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"uniffi_bindgen/bindings/enum.TargetLanguage.html\" title=\"enum uniffi_bindgen::bindings::TargetLanguage\">TargetLanguage</a>","synthetic":false,"types":["uniffi_bindgen::bindings::TargetLanguage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt; for <a class=\"enum\" href=\"uniffi_bindgen/bindings/enum.TargetLanguage.html\" title=\"enum uniffi_bindgen::bindings::TargetLanguage\">TargetLanguage</a>","synthetic":false,"types":["uniffi_bindgen::bindings::TargetLanguage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"uniffi_bindgen/bindings/enum.TargetLanguage.html\" title=\"enum uniffi_bindgen::bindings::TargetLanguage\">TargetLanguage</a>","synthetic":false,"types":["uniffi_bindgen::bindings::TargetLanguage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ ExtendedAttribute&lt;'_&gt;&gt; for <a class=\"enum\" href=\"uniffi_bindgen/interface/attributes/enum.Attribute.html\" title=\"enum uniffi_bindgen::interface::attributes::Attribute\">Attribute</a>","synthetic":false,"types":["uniffi_bindgen::interface::attributes::Attribute"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ Bracketed&lt;Punctuated&lt;ExtendedAttribute&lt;'_&gt;, Comma&gt;&gt;&gt; for <a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.EnumAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::EnumAttributes\">EnumAttributes</a>","synthetic":false,"types":["uniffi_bindgen::interface::attributes::EnumAttributes"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.EnumAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::EnumAttributes\">EnumAttributes</a>, Error = <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.42/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.EnumAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::EnumAttributes\">EnumAttributes</a>","synthetic":false,"types":["uniffi_bindgen::interface::attributes::EnumAttributes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ Bracketed&lt;Punctuated&lt;ExtendedAttribute&lt;'_&gt;, Comma&gt;&gt;&gt; for <a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.FunctionAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::FunctionAttributes\">FunctionAttributes</a>","synthetic":false,"types":["uniffi_bindgen::interface::attributes::FunctionAttributes"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.FunctionAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::FunctionAttributes\">FunctionAttributes</a>, Error = <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.42/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.FunctionAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::FunctionAttributes\">FunctionAttributes</a>","synthetic":false,"types":["uniffi_bindgen::interface::attributes::FunctionAttributes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ Bracketed&lt;Punctuated&lt;ExtendedAttribute&lt;'_&gt;, Comma&gt;&gt;&gt; for <a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.ArgumentAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::ArgumentAttributes\">ArgumentAttributes</a>","synthetic":false,"types":["uniffi_bindgen::interface::attributes::ArgumentAttributes"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.ArgumentAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::ArgumentAttributes\">ArgumentAttributes</a>, Error = <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.42/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.ArgumentAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::ArgumentAttributes\">ArgumentAttributes</a>","synthetic":false,"types":["uniffi_bindgen::interface::attributes::ArgumentAttributes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ Bracketed&lt;Punctuated&lt;ExtendedAttribute&lt;'_&gt;, Comma&gt;&gt;&gt; for <a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.InterfaceAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::InterfaceAttributes\">InterfaceAttributes</a>","synthetic":false,"types":["uniffi_bindgen::interface::attributes::InterfaceAttributes"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.InterfaceAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::InterfaceAttributes\">InterfaceAttributes</a>, Error = <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.42/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.InterfaceAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::InterfaceAttributes\">InterfaceAttributes</a>","synthetic":false,"types":["uniffi_bindgen::interface::attributes::InterfaceAttributes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ Bracketed&lt;Punctuated&lt;ExtendedAttribute&lt;'_&gt;, Comma&gt;&gt;&gt; for <a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.ConstructorAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::ConstructorAttributes\">ConstructorAttributes</a>","synthetic":false,"types":["uniffi_bindgen::interface::attributes::ConstructorAttributes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ Bracketed&lt;Punctuated&lt;ExtendedAttribute&lt;'_&gt;, Comma&gt;&gt;&gt; for <a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.MethodAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::MethodAttributes\">MethodAttributes</a>","synthetic":false,"types":["uniffi_bindgen::interface::attributes::MethodAttributes"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.MethodAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::MethodAttributes\">MethodAttributes</a>, Error = <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.42/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"uniffi_bindgen/interface/attributes/struct.MethodAttributes.html\" title=\"struct uniffi_bindgen::interface::attributes::MethodAttributes\">MethodAttributes</a>","synthetic":false,"types":["uniffi_bindgen::interface::attributes::MethodAttributes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ IdentifierOrString&lt;'_&gt;&gt; for <a class=\"enum\" href=\"uniffi_bindgen/interface/attributes/enum.SelfType.html\" title=\"enum uniffi_bindgen::interface::attributes::SelfType\">SelfType</a>","synthetic":false,"types":["uniffi_bindgen::interface::attributes::SelfType"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()