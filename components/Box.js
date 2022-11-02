const Box = () => {
    return (
        <div className="box">
            <h1>Box Components</h1>
            <style jsx>
                {`
                .box {
                    margin-top:10px;
                    padding:10px;
                    border:1px solid #eaeaea;
                    background:#fff;
                }
            `}
            </style>
        </div>
        
    )
}
export default Box