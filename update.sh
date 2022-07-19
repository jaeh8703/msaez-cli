git checkout template
git pull --rebase
git checkout main
git merge template --allow-unrelated-histories
git checkout --theirs .