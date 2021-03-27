(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{492:function(v,t,e){"use strict";e.r(t);var _=e(29),o=Object(_.a)({},(function(){var v=this,t=v.$createElement,e=v._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[e("code",[v._v("git init")]),v._v(" 初始化项目")]),v._v(" "),e("p",[e("code",[v._v("git add readme.txt")]),v._v(" 将文件到暂存区")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("git add -f App.class")]),v._v("若某些文件被"),e("code",[v._v(".gitignore")]),v._v("忽略了，则可以强制将文件添加到暂存区")])]),v._v(" "),e("p",[e("code",[v._v('git commit -m "wrote a readme"')]),v._v("  提交代码到本地仓库")]),v._v(" "),e("p",[e("code",[v._v("git status")]),v._v(" 查看当前"),e("code",[v._v("git")]),v._v("代码状态")]),v._v(" "),e("p",[e("code",[v._v("git diff readme.txt")]),v._v(" 查看被修改后，未提交的文件与已提交文件的区别")]),v._v(" "),e("p",[e("code",[v._v("git log")]),v._v(" 查看最远到最近的提交日志")]),v._v(" "),e("p",[e("code",[v._v("git log --pretty=oneline")]),v._v(" 功能同上，更清晰，每次提交只在一行显示")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("git log --graph --pretty=oneline --abbrev-commit")]),v._v("查看分支合并情况")]),v._v(" "),e("p",[e("code",[v._v("git log --graph")]),v._v("可以查看分支合并图")])]),v._v(" "),e("p",[e("code",[v._v("git reset --hard HEAD^")]),v._v(" 退回到上个版本")]),v._v(" "),e("blockquote",[e("p",[v._v("当前版本，"),e("code",[v._v("HEAD")])]),v._v(" "),e("p",[v._v("上上个版本，"),e("code",[v._v("HEAD^^")])]),v._v(" "),e("p",[v._v("上100个版本，"),e("code",[v._v("HEAD~100")])])]),v._v(" "),e("p",[e("code",[v._v("git reset --hard c377b8")]),v._v(" 回到未来某个版本，防止误退回")]),v._v(" "),e("p",[e("code",[v._v("git reflog")]),v._v(" 查看命令历史，以便确认回到未来哪个版本")]),v._v(" "),e("p",[e("code",[v._v("git checkout -- readme.txt")]),v._v(" 丢弃本次修改")]),v._v(" "),e("blockquote",[e("p",[v._v("若还没有add，则撤销就和未修改前一模一样")]),v._v(" "),e("p",[v._v("若已经add，然后继续修改了，则撤销就和add后的状态一样")]),v._v(" "),e("p",[v._v("这时候就需要使用另外一个命令")]),v._v(" "),e("p",[e("code",[v._v("git reset HEAD readme.txt")]),v._v(" 撤销暂存区的修改")]),v._v(" "),e("p",[v._v("然后继续使用"),e("code",[v._v("git checkout -- readme.txt")]),v._v("，丢弃本次修改")])]),v._v(" "),e("p",[e("code",[v._v("git rm test.txt")]),v._v("从版本库中删除改文件")]),v._v(" "),e("blockquote",[e("p",[v._v("与"),e("code",[v._v("git add test.txt")]),v._v("相对应")])]),v._v(" "),e("p",[e("code",[v._v('ssh-keygen -t rsa -C "youremail@example.com"')]),v._v(" 创建"),e("code",[v._v("ssh key")])]),v._v(" "),e("p",[e("code",[v._v("cat ~/.ssh/id_rsa.pub")]),v._v("查看"),e("code",[v._v("ssh key")])]),v._v(" "),e("p",[e("code",[v._v("git remote add origin git@github.com:WuHaaaaa/LearnGit.git")]),v._v(" 将本地内容关联到远程仓库已创建项目")]),v._v(" "),e("p",[e("code",[v._v("git push -u origin master")]),v._v("本地仓库内容推送到远程仓库")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("-u")]),v._v("表示关联本地"),e("code",[v._v("master")]),v._v("分支与远程"),e("code",[v._v("master")]),v._v("分支")]),v._v(" "),e("p",[v._v("待到第一次关联，推送成功，后续采用下面命令推送到"),e("code",[v._v("mster")]),v._v("分支")]),v._v(" "),e("p",[e("code",[v._v("git push origin master")])]),v._v(" "),e("p",[e("code",[v._v("git push origin dev")]),v._v("推送dev分支到远程仓库")])]),v._v(" "),e("p",[e("code",[v._v("git clone git@github.com:WuHaaaaa/LearnGit.git")]),v._v("从远程克隆已有的代码到本地")]),v._v(" "),e("p",[e("code",[v._v("git checkout -b dev")]),v._v("创建并切换分支到dev")]),v._v(" "),e("blockquote",[e("p",[v._v("相当于下面两条命令的执行：")]),v._v(" "),e("p",[e("code",[v._v("git branch dev")]),v._v(" 创建dev分支")]),v._v(" "),e("p",[e("code",[v._v("git checkout dev")]),v._v("切换到dev分支")]),v._v(" "),e("p",[e("code",[v._v("git switch -c dev")]),v._v("新版使用这个命令，可以创建并切换到dev分支")]),v._v(" "),e("p",[e("code",[v._v("git switch master")]),v._v("新版使用这个命令，可以直接切换到master分支")]),v._v(" "),e("p",[e("code",[v._v("git checkout -b dev origin/dev")]),v._v("创建远程dev分支到本地")])]),v._v(" "),e("p",[e("code",[v._v("git branch")]),v._v("查看当前分支")]),v._v(" "),e("p",[e("code",[v._v("git merge dev")]),v._v("在当前分支上合并"),e("code",[v._v("dev")]),v._v("分支，若当前分支在"),e("code",[v._v("master")]),v._v("，则将"),e("code",[v._v("dev")]),v._v("合并到"),e("code",[v._v("master")]),v._v("分支")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v('git merge --no-ff -m "merge with no-ff" dev')]),v._v("禁用"),e("code",[v._v("Fast forward")])]),v._v(" "),e("p",[e("code",[v._v("--no-ff")]),v._v("，禁用"),e("code",[v._v("Fast forward")]),v._v("可以让每次合并分支备注信息也记录到历史中，否则每次合并完，合并记录中不存在本次合并说明")])]),v._v(" "),e("p",[e("code",[v._v("git branch -d dev")]),v._v("删除"),e("code",[v._v("dev")]),v._v("分支")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("git branch -D newFeatures")]),v._v("强制删除未合并的分支")])]),v._v(" "),e("p",[e("code",[v._v("git stash")]),v._v("保存当前现场，先修改临时BUG，改完，继续恢复现场，继续工作")]),v._v(" "),e("p",[e("code",[v._v("git stash list")]),v._v("查看"),e("code",[v._v("stash")]),v._v("列表")]),v._v(" "),e("p",[e("code",[v._v("git stash pop")]),v._v("恢复最近一次"),e("code",[v._v("stash")])]),v._v(" "),e("blockquote",[e("p",[v._v("上面这种，恢复完，自动删除本次"),e("code",[v._v("stash")]),v._v("，若不想删除本次stash，则使用如下命令：")]),v._v(" "),e("p",[e("code",[v._v("git stash apply")]),v._v("恢复")]),v._v(" "),e("p",[e("code",[v._v("git stash drop")]),v._v("删除")])]),v._v(" "),e("p",[e("code",[v._v("git stash apply stash@{0}")]),v._v("恢复指定"),e("code",[v._v("stash")]),v._v("，"),e("code",[v._v("stash@{0}")]),v._v("在上面的"),e("code",[v._v("查看stash列表")]),v._v("中就有")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("git stash drop stash@{0}")]),v._v("删除也可以指定")])]),v._v(" "),e("p",[e("code",[v._v("git cherry-pick 4c805e2")]),v._v("将某一次提交复制到某个分支中")]),v._v(" "),e("blockquote",[e("p",[v._v("若当前在"),e("code",[v._v("dev分支")]),v._v("中，可以将"),e("code",[v._v("issue-101")]),v._v("这个"),e("code",[v._v("bug分支")]),v._v("修改的内容复制到"),e("code",[v._v("dev")]),v._v("分支中")])]),v._v(" "),e("p",[e("code",[v._v("git remote")]),v._v("查看远程仓库默认名")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("git remote -v")]),v._v("显示更详细的信息")])]),v._v(" "),e("p",[e("code",[v._v("git pull")]),v._v("拉取当前分支最新的提交到本地")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("git branch --set-upstream-to=origin/dev dev")]),v._v("若本地dev分支与远程origin/dev分支没有链接，则可以使用")])]),v._v(" "),e("p",[e("code",[v._v("git tag v1.0")]),v._v("将当前"),e("code",[v._v("commit")]),v._v("分支打上标签")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("git tag v0.9 2ebf062")]),v._v("对某一次"),e("code",[v._v("commit")]),v._v("打上标签，"),e("code",[v._v("commit id")]),v._v("可通过"),e("code",[v._v("git log")]),v._v("查看")])]),v._v(" "),e("p",[e("code",[v._v("git tag")]),v._v("查看所有标签")]),v._v(" "),e("p",[e("code",[v._v("git show v0.9")]),v._v("查看0.9这个标签的信息")]),v._v(" "),e("p",[e("code",[v._v('git tag -a v0.1 -m "version 0.1 released" 777a5a8')]),v._v("对某一个"),e("code",[v._v("tag")]),v._v("添加说明信息")]),v._v(" "),e("blockquote",[e("p",[v._v("当再次使用"),e("code",[v._v("git show v0.1")]),v._v("时，就可以查看到具体的信息")])]),v._v(" "),e("p",[e("code",[v._v("git push origin --tags")]),v._v("将所有本地标签推送到远程仓库")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("git push origin v0.1")]),v._v("推送某个标签到远程")])]),v._v(" "),e("p",[e("code",[v._v("git tag -d v0.1")]),v._v("删除"),e("code",[v._v("0.1")]),v._v("这个标签")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("git push origin --delete v0.1")]),v._v("删除远程仓库的"),e("code",[v._v("0.1")]),v._v("标签")]),v._v(" "),e("p",[e("code",[v._v("git push origin :refs/tags/v0.9")]),v._v("与上面命令同等作用")])]),v._v(" "),e("p",[e("code",[v._v("git remote add origin git@gitee.com:ruanheng/LearnGit.git")]),v._v("关联"),e("code",[v._v("gitee")]),v._v("远程仓库")]),v._v(" "),e("p",[e("code",[v._v("git remote -v")]),v._v("查看远程仓库信息")]),v._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[v._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[v._v("git")]),v._v(" remote -v\norigin  git@github.com:WuHaaaaa/LearnGit.git "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("fetch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\norigin  git@github.com:WuHaaaaa/LearnGit.git "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("push"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n")])])]),e("p",[e("code",[v._v("git remote rm origin")]),v._v("删除已有的"),e("code",[v._v("origin")]),v._v("远程仓库")]),v._v(" "),e("p",[v._v("推送到远程仓库，多个仓库的情况")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("git remote add github git@github.com:WuHaaaaa/LearnGit.git")]),v._v("关联到"),e("code",[v._v("github")]),v._v("仓库")]),v._v(" "),e("p",[e("code",[v._v("git remote add gitee git@github.com:ruanheng/LearnGit.git")]),v._v("关联到"),e("code",[v._v("gitee")]),v._v("仓库")]),v._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[v._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[v._v("git")]),v._v(" remote -v\ngitee   git@github.com:ruanheng/LearnGit.git "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("fetch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\ngitee   git@github.com:ruanheng/LearnGit.git "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("push"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\ngithub  git@github.com:WuHaaaaa/LearnGit.git "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("fetch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\ngithub  git@github.com:WuHaaaaa/LearnGit.git "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("push"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n")])])]),e("p",[e("code",[v._v("git push github master")]),v._v("推送到"),e("code",[v._v("github")])]),v._v(" "),e("p",[e("code",[v._v("git push gitee master")]),v._v("推送到"),e("code",[v._v("gitee")])])]),v._v(" "),e("p",[e("code",[v._v("git config --global color.ui true")]),v._v("让Git显示颜色，让某些地方会显示更加醒目")]),v._v(" "),e("p",[v._v("配置常用"),e("code",[v._v("git")]),v._v("命令别名配置")]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("git config --global alias.st status")]),v._v("将"),e("code",[v._v("git status")]),v._v("改为"),e("code",[v._v("git st")])]),v._v(" "),e("p",[e("code",[v._v("git config --global alias.co checkout")])]),v._v(" "),e("p",[e("code",[v._v("git config --global alias.ci commit")])]),v._v(" "),e("p",[e("code",[v._v("git config --global alias.br branch")])])]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("git config --global alias.unstage 'reset HEAD'")]),v._v("，修改后的命令：")]),v._v(" "),e("p",[e("code",[v._v("git unstage readme.txt")]),v._v("等同于如下命令：")]),v._v(" "),e("p",[e("code",[v._v("git reset HEAD readme.txt")])]),v._v(" "),e("p",[e("code",[v._v('git config --global alias.last "log -1"')]),v._v(" 查看最近一次提交信息")]),v._v(" "),e("p",[e("code",[v._v("git config --global alias.lg \"log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit\"")]),v._v("查看提交记录")])])])}),[],!1,null,null,null);t.default=o.exports}}]);