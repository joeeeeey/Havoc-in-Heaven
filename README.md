## Havoc In Heaven

> 14年毕业设计, 故事背景为大闹天空的策略网页游戏

### Technology
* Phaser
* Rails 

### 游戏简介
* 类魔塔
* 回合制
* 角色扮演
* 玩家可保存进度

### Run Project in development mode

```bash
$ bundle install
$ bundle exec rake db:create
$ bundle exec rake db:migrate
$ bundle exec rake db:seed
$ bundle exec puma -p 9999 
```

### 一些心得

* 做这个项目的时候，只接触了 rails 这个后端框架, 便用上了。现在看来，对于 phaser 这样的 js 引擎， rails 过于重，而且上下文转换成本高（phaser data => rails controller）。也许使用 sinatra 或者 express 会好很多。
* 做游戏最耗时间的绝不是写代码。。phaser是从零学起，但主要的时间是用来 描绘场景、构思剧情、人物设计、找图、修图、做动画、音乐剪辑。因为没有专业的美工，所以游戏素材彼此的风格差很多，单人想开发游戏还是找有素材库的，或者像素游戏。
* Phaser 很强大，希望 web 端游戏有朝一日能与客户端游戏抗衡。

### 游戏截图

* 一些对话场景

![alt text](https://github.com/joeeeeey/Havoc-in-Heaven/blob/master/app/assets/images/screenshot/shoot1.png)

![alt text](https://github.com/joeeeeey/Havoc-in-Heaven/blob/master/app/assets/images/screenshot/shoot5.png)

![alt text](https://github.com/joeeeeey/Havoc-in-Heaven/blob/master/app/assets/images/screenshot/shoot7.png)

* 道具
  * 卷轴(查看 npc 对话)
  * 七彩的翅膀(各层切换)
  * ~~写轮眼~~ 火眼金睛(查看怪兽属性)

![alt text](https://github.com/joeeeeey/Havoc-in-Heaven/blob/master/app/assets/images/screenshot/shoot8.png)

![alt text](https://github.com/joeeeeey/Havoc-in-Heaven/blob/master/app/assets/images/screenshot/shoot3.png)

![alt text](https://github.com/joeeeeey/Havoc-in-Heaven/blob/master/app/assets/images/screenshot/shoot4.png)

* 地图

![alt text](https://github.com/joeeeeey/Havoc-in-Heaven/blob/master/app/assets/images/screenshot/shoot2.png)


