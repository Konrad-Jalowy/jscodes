function convertArrowToRegular(func){
    let funcString = func.toString();
    let [args, body] = funcString.split("=>");

    let argsy;

    args = args.trim();
    if(args.startsWith("(")){
        args = args.slice(1);
    }

    if(args.endsWith(")")){
        args = args.slice(0,-1);
    }

    args.replace(" ", "");

    if(args === "" || args === " ")
        argsy = [];
    else {
        argsy = args.split(",");
        argsy = argsy.map((el) => el.trim());
    }

    body = body.trim();

    if(body.startsWith("{") && body.endsWith("}")){
        body = body.slice(1);
        body = body.slice(0, -1);
    } else {
        body = "return " + body + ";";
    }

    return new Function(argsy, body);
}