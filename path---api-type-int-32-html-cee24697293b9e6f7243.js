webpackJsonp([126],{"./node_modules/json-loader/index.js!./.cache/json/api-type-int-32-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Int32.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;val&#xA0;zero&#xA0;:&#xA0;int32\n&#xA0;&#xA0;val&#xA0;one&#xA0;:&#xA0;int32\n&#xA0;&#xA0;val&#xA0;minus_one&#xA0;:&#xA0;int32\n&#xA0;&#xA0;external&#xA0;neg&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;%int32_neg&quot;\n&#xA0;&#xA0;external&#xA0;add&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;%int32_add&quot;\n&#xA0;&#xA0;external&#xA0;sub&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;%int32_sub&quot;\n&#xA0;&#xA0;external&#xA0;mul&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;%int32_mul&quot;\n&#xA0;&#xA0;external&#xA0;div&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;%int32_div&quot;\n&#xA0;&#xA0;external&#xA0;rem&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;%int32_mod&quot;\n&#xA0;&#xA0;val&#xA0;succ&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int32\n&#xA0;&#xA0;val&#xA0;pred&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int32\n&#xA0;&#xA0;val&#xA0;abs&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int32\n&#xA0;&#xA0;val&#xA0;max_int&#xA0;:&#xA0;int32\n&#xA0;&#xA0;val&#xA0;min_int&#xA0;:&#xA0;int32\n&#xA0;&#xA0;external&#xA0;logand&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;%int32_and&quot;\n&#xA0;&#xA0;external&#xA0;logor&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;%int32_or&quot;\n&#xA0;&#xA0;external&#xA0;logxor&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;%int32_xor&quot;\n&#xA0;&#xA0;val&#xA0;lognot&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int32\n&#xA0;&#xA0;external&#xA0;shift_left&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;%int32_lsl&quot;\n&#xA0;&#xA0;external&#xA0;shift_right&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;%int32_asr&quot;\n&#xA0;&#xA0;external&#xA0;shift_right_logical&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;%int32_lsr&quot;\n&#xA0;&#xA0;external&#xA0;of_int&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;%int32_of_int&quot;\n&#xA0;&#xA0;external&#xA0;to_int&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;int&#xA0;=&#xA0;&quot;%int32_to_int&quot;\n&#xA0;&#xA0;external&#xA0;of_float&#xA0;:&#xA0;float&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;caml_int32_of_float&quot;\n&#xA0;&#xA0;external&#xA0;to_float&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;float&#xA0;=&#xA0;&quot;caml_int32_to_float&quot;\n&#xA0;&#xA0;external&#xA0;of_string&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;caml_int32_of_string&quot;\n&#xA0;&#xA0;val&#xA0;to_string&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;external&#xA0;bits_of_float&#xA0;:&#xA0;float&#xA0;-&gt;&#xA0;int32&#xA0;=&#xA0;&quot;caml_int32_bits_of_float&quot;\n&#xA0;&#xA0;external&#xA0;float_of_bits&#xA0;:&#xA0;int32&#xA0;-&gt;&#xA0;float&#xA0;=&#xA0;&quot;caml_int32_float_of_bits&quot;\n&#xA0;&#xA0;type&#xA0;t&#xA0;=&#xA0;int32\n&#xA0;&#xA0;val&#xA0;compare&#xA0;:&#xA0;Int32.t&#xA0;-&gt;&#xA0;Int32.t&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;external&#xA0;format&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;int32&#xA0;-&gt;&#xA0;string&#xA0;=&#xA0;&quot;caml_int32_format&quot;\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Int32.html"}}}});
//# sourceMappingURL=path---api-type-int-32-html-cee24697293b9e6f7243.js.map