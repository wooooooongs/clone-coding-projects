let user = {
  name: 'woong'
};

function func() {
  console.log(this.name);
}

let funcUser = func.bind(user);
lo