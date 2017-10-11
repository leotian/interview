### 前端常见面试题

#### 2017年09月20日
  <p>使用 localStorage封装一个 Storage 对象，达到如下效果：<br>
    <img src="http://oucnbze5q.bkt.clouddn.com/17-9-20/4793125.jpg" alt="">
  </p>

#### 2017年09月21日
  <p>
    <img src="http://oucnbze5q.bkt.clouddn.com/17-9-26/46787405.jpg" alt="">
    <br>
    把如上格式的字符串转换成如下 JSON 对象
    <br>
    <img src="http://oucnbze5q.bkt.clouddn.com/17-9-26/79280751.jpg" alt="">
  </p>

#### 2017年09月22日
  <p>
    实现一个sortBy(list, iteratee),返回一个排序后的list拷贝副本。<br>
    如果传递iteratee参数，iteratee将作为list中每个值的排序依据。迭代器也可以是字符串的属性的名称进行排序的(比如 length)。<br>
    <img src="https://mmbiz.qpic.cn/mmbiz_png/3rHtVmQJ8rVSHOteEs0oQRhXUCFtBxcWARGW5Kt5Zx30eLl17JYtmNRRukDbu4lhRSVlic4Ntpc0PoN6Zic0Tvng/0?wx_fmt=png"/>
  </p>

#### 2017年09月25日
  <p>
    实现一个debounce函数,debounce(function, wait, [immed返回 function 函数的防反跳版本, 将延迟函数的执行(真正的执行)<br>
    在函数最后一次调用时刻的 wait 毫秒之后. 对于必须在一些输入（多是一些用户操作）停止到达之后执行的行为有帮助。<br>
    例如: 渲染一个Markdown格式的评论预览, 当窗口停止改变大小之后重新计算布局, 等等])<br>
    <img src="https://mmbiz.qpic.cn/mmbiz_png/3rHtVmQJ8rUILFM2zqfPHVGIsT8akcCFJPQoIwOjojS7IAnOzUcA2Qs3ChTPnBgH9EJCibBleajb65v4mdwictYg/0?wx_fmt=png"/>
  </p>

#### 2017年09月26日
  <p>
    实现一个throttle函数,throttle(function, wait, [options]),创建并返回一个像节流阀一样的函数。<br>
    当重复调用函数的时候，至少每隔 wait毫秒调用一次该函数。对于想控制一些触发频率较高的事件有帮助。<br>
    ex：<br> <img src="http://oucnbze5q.bkt.clouddn.com/17-9-26/36550349.jpg" alt="">
  </p>

#### 2017年09月27日
  <p>
    创建一个after函数, 只有在运行了 count 次之后才有效果. 在处理同组异步请求返回结果时, 如果你要确保同组里所有异步请求完成之后才 执行这个函数, 这将非常有用。<br>
    ex：<br>
    <img src="http://oucnbze5q.bkt.clouddn.com/17-10-9/66530022.jpg" alt="">
  </p>

#### 2017年09月28日
  <p>
    创建一个compose函数,返回函数集 functions 组合后的复合函数, 也就是一个函数执行完之后把返回的结果再作为参数赋给下一个函数来执行. <br>
    以此类推. 在数学里, 把函数 f(), g(), 和 h() 组合起来可以得到复合函数 f(g(h()))。<br>
    ex：<br>
    <img src="http://oucnbze5q.bkt.clouddn.com/17-10-9/84990420.jpg" alt="">
  </p>

#### 2017年09月29日
  <p>
    创建一个before函数,调用不超过count 次。 当count已经达到时，最后一个函数调用的结果将被记住并返回。<br>
    ex：<br>
    <img src="http://oucnbze5q.bkt.clouddn.com/17-10-9/63458874.jpg" alt="">
  </p>

#### 2017年09月30日
  <p>
    利用reduce实现一个main函数，输入一个数组，输出的一个数组，要求如下：<br>
    ex：<br>
    <img src="http://oucnbze5q.bkt.clouddn.com/17-10-9/60311340.jpg" alt="">
  </p>

#### 2017年10月09日
  <p>
    实现一个range函数，range([start], stop, [step])，一个用来创建整数灵活编号的列表的函数，便于each 和 map循环。<br>
    如果省略start则默认为 0；step 默认为 1.返回一个从start 到stop的整数的列表，用step来增加 （或减少）独占。<br>
    值得注意的是，如果stop值在start前面（也就是stop值小于start值），那么值域会被认为是零长度，而不是负增长。如果你要一个负数的值域 ，请使用负数step.<br>
    ex：<br>
    <img src="http://oucnbze5q.bkt.clouddn.com/17-10-9/27165345.jpg" alt="">
  </p>

#### 2017年10月10日
  <p>
    实现有一个groupBy函数，把一个集合分组为多个集合，通过 iterator 返回的结果进行分组。<br>
    ex：<br>
    <img src="http://oucnbze5q.bkt.clouddn.com/17-10-11/56614895.jpg" alt="">
  </p>

#### 2017年10月11日
  <p>
    在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。<br>
    请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。<br>
    ex：<br>
    <img src="http://oucnbze5q.bkt.clouddn.com/17-10-11/51427727.jpg" alt="">
  </p>

