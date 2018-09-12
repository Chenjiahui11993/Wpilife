# Wpilife-- Official WPI CSSA Website ALPHA 1.0 - 4/15/2018: http://www.wpilife.org
# test version now 1.2 4/5/2018
#Client-side:

Angular, bootstrap3, html5,css3.

#Back-end:

Node.js(Express), MongoDB
Alpha 1.0：
Function:
1. Allow user to post their used things such as books cars to sell. For each post, maximum number of image is 5 and only jpg, png and common type of image are allowed to upload to website.
2. Each user now have their user profile where lists all the items they posts to the website. They now could just to choose to delete the item by just clinking the delete button.
3.Recent product part lists all the items users post to the website
3. New stuednts in China now could find related information such as flight, housing service and so on on our new students section
5.Allow user to register in our website, only registed user could post their thingks to our website otherwise they can just browse
6.Search function: user could search goods he want on the right corner of wibsite.
TODO:
1.improve UI, now on product detail, the website needs a more buautiful ways to show items'data
2.Add admin to our function, now all the registered user are the same. Our website need admin who are able to modify the new student section such as add some advice for students and so on.
3.improve register UI.
4.improve user profile page. allow user to change their passwrod and so on.
4. Use nginx to load balance.
version 1.1
1.Now alow user choose the date when they upload their goods
2.Fix bug when sometimes product-list_house_list_book_list will be disordered
3.Add catch function when there are some error on server, giving user a friendly hint
<<<<<<< HEAD
version1.2
5. Fix the bug that the data of the datePicker is not binding to the value.
6. Fix the bug which will happen when user upload image under certain condition.
7. upload some sections in survival-guide.
=======
> > > > > > > 5ad8cb323d4591fa4249e06edc4fdbb49930e44a  



<<<<<<< HEAD
 #9.9end

1. submit提交的不是原来的表格，没有检验email的格式可能是这个原因
2. inquire网页的row和按钮不居中
3. nav的链接还没设置(解决)
4. inquire页面加“忘记邮箱/电话”按钮
5. inquire如何查询？传值？
6. payment页面details太长
=======
 #Payment问题

1. html 94行标明了form的action，但不论表单是否填写，点击submit按钮均无反应。
2. 动画效果均已添加，但不知js文件要如何引用，暂时还未见效果。
3. 网上说即使不借助js也可以完成跳转到某个锚点的功能（[js实现点击跳转到指定位置的方法 - CSDN博客](https://blog.csdn.net/web_callBack/article/details/70142556)方法一），但是我这么写，点击之后都会跳转到wpilife的主页。如果借助js，就是现在写的这样，但是还是js引用的问题。
4. 支付成功（失败）和查询界面我尽快完成。
>>>>>>> 4f5a946ad5c29a5fe2ca977f2ecf93b2f316597f
