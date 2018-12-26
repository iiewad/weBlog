Component({
  properties: {},

  data: {
    posts: [],
    blogInfo: {}
  },

  methods: {

    postDetail: function (e) {
      var eventDetail = {
        data: e.currentTarget.dataset.index
      }
      var eventOption = {
        composed: true
      }
      this.triggerEvent('click_btn', eventDetail, eventOption);
    }
  },

  attached: function () {
  
    var res = {
      "status": 200,
      "message": "success",
      "data": {
        "feed": {
          "xmlns": "http://www.w3.org/2005/Atom",
          "generator": "Jekyll",
          "link": [
            {
              "href": "http://localhost:4000/feed.xml",
              "rel": "self",
              "type": "application/atom+xml"
            },
            {
              "href": "http://localhost:4000/",
              "rel": "alternate",
              "type": "text/html"
            }
          ],
          "updated": "2018-11-19T15:03:15+08:00",
          "id": "http://localhost:4000/feed.xml",
          "title": "Iewad",
          "subtitle": "Not yet!",
          "entry": [

            {
              "title": "有效的括号",
              "link": {
                "href": "http://localhost:4000/nginx/2018/09/20/%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7.html",
                "rel": "alternate",
                "type": "text/html",
                "title": "有效的括号"
              },
              "published": "2018-09-20T23:58:37+08:00",
              "updated": "2018-09-20T23:58:37+08:00",
              "id": "http://localhost:4000/nginx/2018/09/20/%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7",
              "content": "<p>给定一个只包括 ‘(‘，’)’，’{‘，’}’，’[‘，’]’ 的字符串，判断字符串是否有效。</p>\n\n<p>有效字符串需满足：</p>\n\n<p>左括号必须用相同类型的右括号闭合。\n左括号必须以正确的顺序闭合。\n注意空字符串可被认为是有效字符串。</p>\n\n<p>示例 1:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入: \"()\"\n输出: true\n</code></pre></div></div>\n<p>示例 2:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入: \"()[]{}\"\n输出: true\n</code></pre></div></div>\n<p>示例 3:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入: \"(]\"\n输出: false\n</code></pre></div></div>\n<p>示例 4:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入: \"([)]\"\n输出: false\n</code></pre></div></div>\n<p>示例 5:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入: \"{[]}\"\n输出: true\n</code></pre></div></div>\n\n<div class=\"language-ruby highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code><span class=\"c1\"># @param {String} s</span>\n<span class=\"c1\"># @return {Boolean}</span>\n<span class=\"k\">def</span> <span class=\"nf\">is_valid</span><span class=\"p\">(</span><span class=\"n\">s</span><span class=\"p\">)</span>\n    <span class=\"k\">return</span> <span class=\"kp\">false</span> <span class=\"k\">if</span> <span class=\"n\">s</span><span class=\"p\">.</span><span class=\"nf\">length</span><span class=\"p\">.</span><span class=\"nf\">odd?</span>\n    <span class=\"n\">obj</span> <span class=\"o\">=</span> <span class=\"p\">{</span>\n        <span class=\"s2\">\"[\"</span> <span class=\"o\">=&gt;</span> <span class=\"s2\">\"]\"</span><span class=\"p\">,</span>\n        <span class=\"s2\">\"{\"</span> <span class=\"o\">=&gt;</span> <span class=\"s2\">\"}\"</span><span class=\"p\">,</span>\n        <span class=\"s2\">\"(\"</span> <span class=\"o\">=&gt;</span> <span class=\"s2\">\")\"</span>\n        <span class=\"p\">}</span>\n    <span class=\"n\">index</span> <span class=\"o\">=</span> <span class=\"mi\">0</span>\n    <span class=\"k\">while</span> <span class=\"n\">index</span> <span class=\"o\">&lt;</span> <span class=\"n\">s</span><span class=\"p\">.</span><span class=\"nf\">length</span> <span class=\"k\">do</span>\n        <span class=\"k\">if</span> <span class=\"n\">obj</span><span class=\"p\">[</span><span class=\"n\">s</span><span class=\"p\">[</span><span class=\"n\">index</span><span class=\"p\">]]</span> <span class=\"o\">!=</span> <span class=\"n\">s</span><span class=\"p\">[</span><span class=\"n\">index</span><span class=\"o\">+</span><span class=\"mi\">1</span><span class=\"p\">]</span>\n            <span class=\"n\">index</span> <span class=\"o\">+=</span> <span class=\"mi\">1</span>\n            <span class=\"k\">next</span>\n        <span class=\"k\">else</span>\n            <span class=\"n\">s</span><span class=\"p\">.</span><span class=\"nf\">slice!</span><span class=\"p\">(</span><span class=\"n\">index</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">)</span>\n            <span class=\"n\">index</span> <span class=\"o\">=</span> <span class=\"mi\">0</span>\n        <span class=\"k\">end</span>\n    <span class=\"k\">end</span>\n    <span class=\"k\">return</span> <span class=\"kp\">false</span> <span class=\"k\">if</span> <span class=\"n\">s</span><span class=\"p\">.</span><span class=\"nf\">length</span> <span class=\"o\">&gt;</span> <span class=\"mi\">0</span>\n    <span class=\"k\">return</span> <span class=\"kp\">true</span>\n<span class=\"k\">end</span>\n</code></pre></div></div>",
              "author": {
                "name": null
              },
              "summary": "给定一个只包括 ‘(‘，’)’，’{‘，’}’，’[‘，’]’ 的字符串，判断字符串是否有效。"
            },
            {
              "title": "最长公共前缀",
              "link": {
                "href": "http://localhost:4000/nginx/2018/09/20/%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%89%8D%E7%BC%80.html",
                "rel": "alternate",
                "type": "text/html",
                "title": "最长公共前缀"
              },
              "published": "2018-09-20T17:30:15+08:00",
              "updated": "2018-09-20T17:30:15+08:00",
              "id": "http://localhost:4000/nginx/2018/09/20/%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%89%8D%E7%BC%80",
              "content": "<p>给定一个只包括 ‘(‘，’)’，’{‘，’}’，’[‘，’]’ 的字符串，判断字符串是否有效。</p>\n\n<p>有效字符串需满足：</p>\n\n<p>左括号必须用相同类型的右括号闭合。\n左括号必须以正确的顺序闭合。\n注意空字符串可被认为是有效字符串。</p>\n\n<p>示例 1:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入: \"()\"\n输出: true\n</code></pre></div></div>\n<p>示例 2:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入: \"()[]{}\"\n输出: true\n</code></pre></div></div>\n<p>示例 3:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入: \"(]\"\n输出: false\n</code></pre></div></div>\n<p>示例 4:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入: \"([)]\"\n输出: false\n</code></pre></div></div>\n<p>示例 5:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入: \"{[]}\"\n输出: true\n</code></pre></div></div>\n\n<div class=\"language-ruby highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code><span class=\"c1\"># @param {String} s</span>\n<span class=\"c1\"># @return {Boolean}</span>\n<span class=\"k\">def</span> <span class=\"nf\">is_valid</span><span class=\"p\">(</span><span class=\"n\">s</span><span class=\"p\">)</span>\n    <span class=\"k\">return</span> <span class=\"kp\">false</span> <span class=\"k\">if</span> <span class=\"n\">s</span><span class=\"p\">.</span><span class=\"nf\">length</span><span class=\"p\">.</span><span class=\"nf\">odd?</span>\n    <span class=\"n\">obj</span> <span class=\"o\">=</span> <span class=\"p\">{</span>\n        <span class=\"s2\">\"[\"</span> <span class=\"o\">=&gt;</span> <span class=\"s2\">\"]\"</span><span class=\"p\">,</span>\n        <span class=\"s2\">\"{\"</span> <span class=\"o\">=&gt;</span> <span class=\"s2\">\"}\"</span><span class=\"p\">,</span>\n        <span class=\"s2\">\"(\"</span> <span class=\"o\">=&gt;</span> <span class=\"s2\">\")\"</span>\n        <span class=\"p\">}</span>\n    <span class=\"c1\">#return false if obj[s[0]] != s[s.length-1]</span>\n    <span class=\"n\">index</span> <span class=\"o\">=</span> <span class=\"mi\">0</span>\n    <span class=\"k\">while</span> <span class=\"n\">index</span> <span class=\"o\">&lt;</span> <span class=\"n\">s</span><span class=\"p\">.</span><span class=\"nf\">length</span> <span class=\"k\">do</span>\n        <span class=\"k\">if</span> <span class=\"n\">obj</span><span class=\"p\">[</span><span class=\"n\">s</span><span class=\"p\">[</span><span class=\"n\">index</span><span class=\"p\">]]</span> <span class=\"o\">!=</span> <span class=\"n\">s</span><span class=\"p\">[</span><span class=\"n\">index</span><span class=\"o\">+</span><span class=\"mi\">1</span><span class=\"p\">]</span>\n            <span class=\"n\">index</span> <span class=\"o\">+=</span> <span class=\"mi\">1</span>\n            <span class=\"k\">next</span>\n        <span class=\"k\">else</span>\n            <span class=\"n\">s</span><span class=\"p\">.</span><span class=\"nf\">slice!</span><span class=\"p\">(</span><span class=\"n\">index</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">)</span>\n            <span class=\"n\">index</span> <span class=\"o\">=</span> <span class=\"mi\">0</span>\n        <span class=\"k\">end</span>\n    <span class=\"k\">end</span>\n    <span class=\"k\">return</span> <span class=\"kp\">false</span> <span class=\"k\">if</span> <span class=\"n\">s</span><span class=\"p\">.</span><span class=\"nf\">length</span> <span class=\"o\">&gt;</span> <span class=\"mi\">0</span>\n    <span class=\"k\">return</span> <span class=\"kp\">true</span>\n<span class=\"k\">end</span>\n</code></pre></div></div>",
              "author": {
                "name": null
              },
              "summary": "给定一个只包括 ‘(‘，’)’，’{‘，’}’，’[‘，’]’ 的字符串，判断字符串是否有效。"
            },
            {
              "title": "反转整数",
              "link": {
                "href": "http://localhost:4000/nginx/2018/09/19/%E5%8F%8D%E8%BD%AC%E6%95%B4%E6%95%B0.html",
                "rel": "alternate",
                "type": "text/html",
                "title": "反转整数"
              },
              "published": "2018-09-19T16:21:19+08:00",
              "updated": "2018-09-19T16:21:19+08:00",
              "id": "http://localhost:4000/nginx/2018/09/19/%E5%8F%8D%E8%BD%AC%E6%95%B4%E6%95%B0",
              "content": "<p>给定一个 32 位有符号整数，将整数中的数字进行反转。</p>\n\n<p>示例 1:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入: 123\n输出: 321\n</code></pre></div></div>\n<p>示例 2:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入: -123\n输出: -321\n</code></pre></div></div>\n\n<p>示例 3:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入: 120\n输出: 21\n</code></pre></div></div>\n<p>注意:</p>\n\n<p>假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。</p>\n\n<div class=\"language-ruby highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code><span class=\"c1\"># @param {Integer} x</span>\n<span class=\"c1\"># @return {Integer}</span>\n<span class=\"k\">def</span> <span class=\"nf\">reverse</span><span class=\"p\">(</span><span class=\"n\">x</span><span class=\"p\">)</span>\n    <span class=\"n\">tmp_str</span> <span class=\"o\">=</span> <span class=\"n\">x</span><span class=\"p\">.</span><span class=\"nf\">to_s</span>\n    <span class=\"k\">if</span> <span class=\"n\">tmp_str</span><span class=\"p\">.</span><span class=\"nf\">include?</span> <span class=\"s1\">'-'</span>\n        <span class=\"n\">tmp_str</span><span class=\"p\">.</span><span class=\"nf\">delete!</span> <span class=\"s1\">'-'</span>\n        <span class=\"n\">tmp_str</span> <span class=\"o\">=</span> <span class=\"s1\">'-'</span> <span class=\"o\">+</span> <span class=\"n\">tmp_str</span><span class=\"p\">.</span><span class=\"nf\">reverse</span>\n    <span class=\"k\">else</span>\n        <span class=\"n\">tmp_str</span><span class=\"p\">.</span><span class=\"nf\">reverse!</span>\n    <span class=\"k\">end</span>\n    \n    <span class=\"k\">return</span> <span class=\"mi\">0</span> <span class=\"k\">if</span> <span class=\"n\">tmp_str</span><span class=\"p\">.</span><span class=\"nf\">to_i</span> <span class=\"o\">&lt;</span> <span class=\"o\">-</span><span class=\"mi\">2</span> <span class=\"o\">**</span> <span class=\"mi\">31</span> <span class=\"o\">||</span> <span class=\"n\">tmp_str</span><span class=\"p\">.</span><span class=\"nf\">to_i</span> <span class=\"o\">&gt;</span> <span class=\"mi\">2</span> <span class=\"o\">**</span> <span class=\"mi\">31</span> <span class=\"o\">-</span> <span class=\"mi\">1</span>\n    <span class=\"k\">return</span> <span class=\"n\">tmp_str</span><span class=\"p\">.</span><span class=\"nf\">to_i</span>\n<span class=\"k\">end</span>\n</code></pre></div></div>",
              "author": {
                "name": null
              },
              "summary": "给定一个 32 位有符号整数，将整数中的数字进行反转。"
            },
            {
              "title": "子数组的最小值之和",
              "link": {
                "href": "http://localhost:4000/nginx/2018/09/19/%E5%AD%90%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%B0%8F%E5%80%BC%E4%B9%8B%E5%92%8C.html",
                "rel": "alternate",
                "type": "text/html",
                "title": "子数组的最小值之和"
              },
              "published": "2018-09-19T15:53:42+08:00",
              "updated": "2018-09-19T15:53:42+08:00",
              "id": "http://localhost:4000/nginx/2018/09/19/%E5%AD%90%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%B0%8F%E5%80%BC%E4%B9%8B%E5%92%8C",
              "content": "<p>给定一个整数数组 A，找到 min(B) 的总和，其中 B 的范围为 A 的每个（连续）子数组。</p>\n\n<p>由于答案可能很大，因此返回答案模 <code class=\"highlighter-rouge\">0^9 + 7</code>。</p>\n\n<p>示例：</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>输入：[3,1,2,4]\n输出：17\n解释：\n子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。 \n最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。\n</code></pre></div></div>\n<p>提示：</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>1 &lt;= A &lt;= 30000\n1 &lt;= A[i] &lt;= 30000\n</code></pre></div></div>\n\n<div class=\"language-ruby highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code><span class=\"c1\"># 并没有通过(TLE)，能力有限想不到其它办法了</span>\n<span class=\"c1\"># @param {Integer[]} a</span>\n<span class=\"c1\"># @return {Integer}</span>\n<span class=\"k\">def</span> <span class=\"nf\">sum_subarray_mins</span><span class=\"p\">(</span><span class=\"n\">a</span><span class=\"p\">)</span>\n  <span class=\"n\">res_arr</span> <span class=\"o\">=</span> <span class=\"no\">Array</span><span class=\"p\">.</span><span class=\"nf\">new</span>\n  <span class=\"n\">a</span><span class=\"p\">.</span><span class=\"nf\">each_with_index</span> <span class=\"k\">do</span> <span class=\"o\">|</span><span class=\"n\">_</span><span class=\"p\">,</span> <span class=\"n\">index</span><span class=\"o\">|</span>\n    <span class=\"n\">tmp_arr</span> <span class=\"o\">=</span> <span class=\"n\">a</span><span class=\"p\">.</span><span class=\"nf\">clone</span>\n    <span class=\"n\">len</span> <span class=\"o\">=</span> <span class=\"n\">tmp_arr</span><span class=\"p\">.</span><span class=\"nf\">length</span>\n    <span class=\"n\">count</span> <span class=\"o\">=</span> <span class=\"n\">index</span> <span class=\"o\">+</span> <span class=\"mi\">1</span>\n    <span class=\"k\">while</span> <span class=\"n\">len</span> <span class=\"o\">&gt;</span> <span class=\"mi\">0</span> <span class=\"o\">&amp;&amp;</span> <span class=\"n\">len</span> <span class=\"o\">&gt;=</span> <span class=\"n\">count</span> <span class=\"k\">do</span>\n      <span class=\"n\">res_arr</span> <span class=\"o\">&lt;&lt;</span> <span class=\"n\">tmp_arr</span><span class=\"p\">.</span><span class=\"nf\">take</span><span class=\"p\">(</span><span class=\"n\">count</span><span class=\"p\">)</span>\n      <span class=\"n\">tmp_arr</span><span class=\"p\">.</span><span class=\"nf\">shift</span>\n      <span class=\"n\">len</span> <span class=\"o\">=</span> <span class=\"n\">tmp_arr</span><span class=\"p\">.</span><span class=\"nf\">length</span>\n    <span class=\"k\">end</span>\n  <span class=\"k\">end</span>\n\n  <span class=\"n\">sum</span> <span class=\"o\">=</span> <span class=\"mi\">0</span>\n  <span class=\"n\">res_arr</span><span class=\"p\">.</span><span class=\"nf\">each</span> <span class=\"p\">{</span> <span class=\"o\">|</span><span class=\"n\">val</span><span class=\"o\">|</span> <span class=\"n\">sum</span> <span class=\"o\">+=</span> <span class=\"n\">val</span><span class=\"p\">.</span><span class=\"nf\">min</span> <span class=\"p\">}</span>\n  <span class=\"c1\">#p sum</span>\n  <span class=\"nb\">p</span> <span class=\"n\">sum</span> <span class=\"o\">%</span> <span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"n\">e9</span> <span class=\"o\">+</span> <span class=\"mi\">7</span><span class=\"p\">).</span><span class=\"nf\">to_i</span>\n<span class=\"k\">end</span>\n</code></pre></div></div>",
              "author": {
                "name": null
              },
              "summary": "给定一个整数数组 A，找到 min(B) 的总和，其中 B 的范围为 A 的每个（连续）子数组。"
            },
            {
              "title": "三数之和",
              "link": {
                "href": "http://localhost:4000/nginx/2018/09/19/%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html",
                "rel": "alternate",
                "type": "text/html",
                "title": "三数之和"
              },
              "published": "2018-09-19T10:57:51+08:00",
              "updated": "2018-09-19T10:57:51+08:00",
              "id": "http://localhost:4000/nginx/2018/09/19/%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C",
              "content": "<p>给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。</p>\n\n<p>注意：答案中不可以包含重复的三元组。</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，\n\n满足要求的三元组集合为：\n[\n  [-1, 0, 1],\n  [-1, -1, 2]\n]\n</code></pre></div></div>\n\n<div class=\"language-ruby highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code><span class=\"c1\"># @param {Integer[]} nums</span>\n<span class=\"c1\"># @return {Integer[][]}</span>\n<span class=\"k\">def</span> <span class=\"nf\">three_sum</span><span class=\"p\">(</span><span class=\"n\">nums</span><span class=\"p\">)</span>\n    <span class=\"n\">arr</span> <span class=\"o\">=</span> <span class=\"n\">nums</span><span class=\"p\">.</span><span class=\"nf\">sort</span>\n    <span class=\"n\">tmp_arr</span> <span class=\"o\">=</span> <span class=\"no\">Array</span><span class=\"p\">.</span><span class=\"nf\">new</span>\n\n    <span class=\"n\">arr</span><span class=\"p\">.</span><span class=\"nf\">each_with_index</span> <span class=\"k\">do</span> <span class=\"o\">|</span><span class=\"n\">_</span><span class=\"p\">,</span> <span class=\"n\">a_index</span><span class=\"o\">|</span>\n      <span class=\"k\">next</span> <span class=\"k\">if</span> <span class=\"n\">a_index</span> <span class=\"o\">!=</span> <span class=\"mi\">0</span> <span class=\"o\">&amp;&amp;</span> <span class=\"n\">arr</span><span class=\"p\">[</span><span class=\"n\">a_index</span><span class=\"p\">]</span> <span class=\"o\">==</span> <span class=\"n\">arr</span><span class=\"p\">[</span><span class=\"n\">a_index</span> <span class=\"o\">-</span> <span class=\"mi\">1</span><span class=\"p\">]</span>\n      <span class=\"n\">start</span> <span class=\"o\">=</span> <span class=\"n\">a_index</span>\n      <span class=\"n\">left</span> <span class=\"o\">=</span> <span class=\"n\">a_index</span> <span class=\"o\">+</span> <span class=\"mi\">1</span>\n      <span class=\"n\">right</span> <span class=\"o\">=</span> <span class=\"n\">arr</span><span class=\"p\">.</span><span class=\"nf\">length</span> <span class=\"o\">-</span> <span class=\"mi\">1</span>\n      <span class=\"k\">while</span> <span class=\"n\">left</span> <span class=\"o\">&lt;</span> <span class=\"n\">right</span>\n        <span class=\"n\">sum</span> <span class=\"o\">=</span> <span class=\"n\">arr</span><span class=\"p\">[</span><span class=\"n\">start</span><span class=\"p\">]</span> <span class=\"o\">+</span> <span class=\"n\">arr</span><span class=\"p\">[</span><span class=\"n\">left</span><span class=\"p\">]</span> <span class=\"o\">+</span> <span class=\"n\">arr</span><span class=\"p\">[</span><span class=\"n\">right</span><span class=\"p\">]</span>\n        <span class=\"n\">right</span> <span class=\"o\">-=</span> <span class=\"mi\">1</span> <span class=\"k\">if</span> <span class=\"n\">sum</span> <span class=\"o\">&gt;</span> <span class=\"mi\">0</span>\n        <span class=\"n\">left</span> <span class=\"o\">+=</span> <span class=\"mi\">1</span> <span class=\"k\">if</span> <span class=\"n\">sum</span> <span class=\"o\">&lt;</span> <span class=\"mi\">0</span>\n        <span class=\"k\">if</span> <span class=\"n\">sum</span><span class=\"p\">.</span><span class=\"nf\">zero?</span>\n          <span class=\"n\">tmp_arr</span> <span class=\"o\">&lt;&lt;</span> <span class=\"p\">[</span><span class=\"n\">arr</span><span class=\"p\">[</span><span class=\"n\">start</span><span class=\"p\">],</span> <span class=\"n\">arr</span><span class=\"p\">[</span><span class=\"n\">left</span><span class=\"p\">],</span> <span class=\"n\">arr</span><span class=\"p\">[</span><span class=\"n\">right</span><span class=\"p\">]]</span>\n          <span class=\"n\">left</span> <span class=\"o\">+=</span> <span class=\"mi\">1</span>\n          <span class=\"n\">right</span> <span class=\"o\">-=</span> <span class=\"mi\">1</span>\n        <span class=\"k\">end</span>\n      <span class=\"k\">end</span>\n    <span class=\"k\">end</span>\n\n    <span class=\"nb\">p</span> <span class=\"n\">tmp_arr</span><span class=\"p\">.</span><span class=\"nf\">uniq</span>\n<span class=\"k\">end</span>\n</code></pre></div></div>",
              "author": {
                "name": null
              },
              "summary": "给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。"
            },
            {
              "title": "两数之和",
              "link": {
                "href": "http://localhost:4000/nginx/2018/09/18/%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html",
                "rel": "alternate",
                "type": "text/html",
                "title": "两数之和"
              },
              "published": "2018-09-18T22:02:26+08:00",
              "updated": "2018-09-18T22:02:26+08:00",
              "id": "http://localhost:4000/nginx/2018/09/18/%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C",
              "content": "<p>给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。</p>\n\n<p>你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。</p>\n\n<p>示例:</p>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>给定 nums = [2, 7, 11, 15], target = 9\n\n因为 nums[0] + nums[1] = 2 + 7 = 9\n所以返回 [0, 1]\n</code></pre></div></div>\n\n<pre><code class=\"language-JavaScript\">/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    for (var i = 0; i &lt; nums.length; i++) {\n        for(var j = i + 1; j &lt; nums.length; j++) {\n            if(nums[i] + nums[j] == target) {\n                return [i, j]\n            }\n        }\n    }\n};\ntwoSum([2,7,11,15], 9)\n\n</code></pre>",
              "author": {
                "name": null
              },
              "summary": "给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。"
            },
            {
              "title": "代码片段",
              "link": {
                "href": "http://localhost:4000/nginx/2018/09/05/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5.html",
                "rel": "alternate",
                "type": "text/html",
                "title": "代码片段"
              },
              "published": "2018-09-05T11:44:19+08:00",
              "updated": "2018-09-05T11:44:19+08:00",
              "id": "http://localhost:4000/nginx/2018/09/05/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5",
              "content": "<div class=\"language-ruby highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code><span class=\"c1\"># case_when_matcher_classes.rb</span>\n\n<span class=\"k\">class</span> <span class=\"nc\">Zigor</span>\n  <span class=\"k\">def</span> <span class=\"nc\">self</span><span class=\"o\">.</span><span class=\"nf\">===</span><span class=\"p\">(</span><span class=\"n\">string</span><span class=\"p\">)</span>\n    <span class=\"n\">string</span><span class=\"p\">.</span><span class=\"nf\">downcase</span> <span class=\"o\">==</span> <span class=\"s2\">\"zigor\"</span>\n  <span class=\"k\">end</span>\n<span class=\"k\">end</span>\n\n<span class=\"nb\">name</span> <span class=\"o\">=</span> <span class=\"s2\">\"Zigor\"</span>\n\n<span class=\"k\">case</span> <span class=\"nb\">name</span>\n<span class=\"k\">when</span> <span class=\"no\">Zigor</span>\n  <span class=\"nb\">puts</span> <span class=\"s2\">\"Nice to meet you Zigor!!!\"</span>\n<span class=\"k\">else</span>\n  <span class=\"nb\">puts</span> <span class=\"s2\">\"Who are you?\"</span>\n<span class=\"k\">end</span>\n</code></pre></div></div>\n\n<div class=\"language-ruby highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code><span class=\"mi\">10</span><span class=\"p\">.</span><span class=\"nf\">downto</span> <span class=\"mi\">1</span> <span class=\"k\">do</span> <span class=\"o\">|</span><span class=\"n\">num</span><span class=\"o\">|</span>\n  <span class=\"nb\">p</span> <span class=\"n\">num</span>\n<span class=\"k\">end</span>\n\n<span class=\"mi\">17</span><span class=\"p\">.</span><span class=\"nf\">upto</span> <span class=\"mi\">23</span> <span class=\"k\">do</span> <span class=\"o\">|</span><span class=\"n\">i</span><span class=\"o\">|</span>\n  <span class=\"nb\">print</span> <span class=\"s2\">\"</span><span class=\"si\">#{</span><span class=\"n\">i</span><span class=\"si\">}</span><span class=\"s2\">, \"</span>\n<span class=\"k\">end</span>\n\n<span class=\"mi\">1</span><span class=\"p\">.</span><span class=\"nf\">step</span> <span class=\"mi\">10</span> <span class=\"k\">do</span> <span class=\"o\">|</span><span class=\"n\">i</span><span class=\"o\">|</span>\n <span class=\"nb\">print</span> <span class=\"s2\">\"</span><span class=\"si\">#{</span><span class=\"n\">i</span><span class=\"si\">}</span><span class=\"s2\">, \"</span>\n<span class=\"k\">end</span>\n<span class=\"c1\"># 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,</span>\n\n<span class=\"mi\">10</span><span class=\"p\">.</span><span class=\"nf\">step</span> <span class=\"mi\">1</span> <span class=\"k\">do</span> <span class=\"o\">|</span><span class=\"n\">i</span><span class=\"o\">|</span>\n <span class=\"nb\">print</span> <span class=\"s2\">\"</span><span class=\"si\">#{</span><span class=\"n\">i</span><span class=\"si\">}</span><span class=\"s2\">, \"</span>\n<span class=\"k\">end</span>\n\n<span class=\"c1\">#10, 9, 8, 7, 6, 5, 4, 3, 2, 1,</span>\n\n<span class=\"mi\">10</span><span class=\"p\">.</span><span class=\"nf\">step</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"o\">-</span><span class=\"mi\">2</span> <span class=\"k\">do</span> <span class=\"o\">|</span><span class=\"n\">i</span><span class=\"o\">|</span>\n  <span class=\"nb\">print</span> <span class=\"s2\">\"</span><span class=\"si\">#{</span><span class=\"n\">i</span><span class=\"si\">}</span><span class=\"s2\">, \"</span>\n<span class=\"k\">end</span>\n<span class=\"c1\"># 10, 8, 6, 4, 2, </span>\n\n<span class=\"mi\">2</span><span class=\"p\">.</span><span class=\"nf\">step</span> <span class=\"mi\">10</span><span class=\"p\">,</span> <span class=\"mi\">2</span> <span class=\"k\">do</span> <span class=\"o\">|</span><span class=\"n\">i</span><span class=\"o\">|</span>\n  <span class=\"nb\">print</span> <span class=\"s2\">\"</span><span class=\"si\">#{</span><span class=\"n\">i</span><span class=\"si\">}</span><span class=\"s2\">, \"</span>\n<span class=\"k\">end</span>\n<span class=\"c1\"># 2, 4, 6, 8, 10,</span>\n</code></pre></div></div>\n\n<p>redo:</p>\n<div class=\"language-ruby highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code><span class=\"mi\">5</span><span class=\"p\">.</span><span class=\"nf\">times</span> <span class=\"k\">do</span> <span class=\"o\">|</span><span class=\"n\">num</span><span class=\"o\">|</span>\n  <span class=\"nb\">puts</span> <span class=\"s2\">\"num = </span><span class=\"si\">#{</span><span class=\"n\">num</span><span class=\"si\">}</span><span class=\"s2\">\"</span>\n  <span class=\"nb\">puts</span> <span class=\"s2\">\"Do you want to redo? (y/n): \"</span>\n  <span class=\"n\">option</span> <span class=\"o\">=</span> <span class=\"nb\">gets</span><span class=\"p\">.</span><span class=\"nf\">chop</span>\n  <span class=\"k\">redo</span> <span class=\"k\">if</span> <span class=\"n\">option</span> <span class=\"o\">==</span> <span class=\"s1\">'y'</span>\n<span class=\"k\">end</span>\n</code></pre></div></div>\n\n<p>array</p>\n<h2 id=\"dig\">dig</h2>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>&gt;&gt; array = [1, 5, [7, 9, 11, [\"Treasure\"], \"Sigma\"]]\n=&gt; [1, 5, [7, 9, 11, [\"Treasure\"], \"Sigma\"]]\n&gt;&gt; array.dig(2, 3, 0)\n=&gt; \"Treasure\"\n=&gt; array[2][3][0]\n&gt;&gt; \"Treasure\"\n</code></pre></div></div>\n\n<h2 id=\"array\">array</h2>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>&gt;&gt; volleyball=[\"Ashok\", \"Chavan\", \"Karthik\", \"Jesus\", \"Budha\"]\n=&gt; [\"Ashok\", \"Chavan\", \"Karthik\", \"Jesus\", \"Budha\"]\n&gt;&gt; cricket=[\"Budha\", \"Karthik\", \"Ragu\", \"Ram\"]\n=&gt; [\"Budha\", \"Karthik\", \"Ragu\", \"Ram\"] \n\n&gt;&gt; volleyball &amp; cricket\n=&gt; [\"Karthik\", \"Budha\"] \n\n&gt;&gt; volleyball | cricket\n=&gt; [\"Ashok\", \"Chavan\", \"Karthik\", \"Jesus\", \"Budha\", \"Ragu\", \"Ram\"] \n\n&gt;&gt; volleyball + cricket\n=&gt; [\"Ashok\", \"Chavan\", \"Karthik\", \"Jesus\", \"Budha\", \"Budha\", \"Karthik\", \"Ragu\",\n\"Ram\"]\n\n&gt;&gt; volleyball - cricket \n=&gt; [\"Ashok\", \"Chavan\", \"Jesus\"] \n</code></pre></div></div>\n\n<h2 id=\"作用域\">作用域</h2>\n<div class=\"language-ruby highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code><span class=\"vg\">$x</span> <span class=\"o\">=</span> <span class=\"mi\">5</span>\n<span class=\"k\">def</span> <span class=\"nf\">print_x</span>\n    <span class=\"vg\">$x</span> <span class=\"o\">=</span> <span class=\"mi\">3</span>\n    <span class=\"nb\">puts</span> <span class=\"vg\">$x</span>\n<span class=\"k\">end</span>\n<span class=\"n\">print_x</span>\n<span class=\"nb\">puts</span> <span class=\"vg\">$x</span>\n<span class=\"c1\"># 3</span>\n<span class=\"c1\"># 3</span>\n</code></pre></div></div>\n\n<h2 id=\"对象\">对象</h2>\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>class Square\n    attr_accessor :side_length\n    def initialize side_length = 0\n        @side_length = side_length\n    end\n    def area\n        @side_length * @side_length\n    end\n    def perimeter\n        4 * @side_length\n    end\nend\n\ns1 = Square.new 4\ns2 = Square.new\ns2.side_length = 5\nputs \"Area of s1 is #{s1.area} squnits\"\nputs \"Peimeter of s2 is #{s2.perimeter} units\"\nOutput\nArea of s1 is 16 squnits\nPerimeter of s2 is 20 units\n</code></pre></div></div>\n\n<div class=\"highlighter-rouge\"><div class=\"highlight\"><pre class=\"highlight\"><code>chmod a+x shebang.rb\n</code></pre></div></div>",
              "author": {
                "name": null
              },
              "summary": "```ruby case_when_matcher_classes.rb"
            }
          ]
        }
      }
    }
  
    console.log(res);
    var feed = res.data.feed;
    var blogInfo = {
      generator: feed.generator,
      id: feed.id,
      link: feed.link,
      subtitle: feed.subtitle,
      title: feed.title,
      updated: feed.updated,
      xmlns: feed.xmlns
    };
    this.setData({
      blogInfo: blogInfo,
      posts: feed.entry
    });
    wx.setStorage({
      key: 'posts',
      data: feed.entry,
    })
  },
})
