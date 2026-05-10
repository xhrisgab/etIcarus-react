import useSerialStore from "../store/serialStore";
const LogStatus = () => {
    const serialData = useSerialStore((state) => state.serialData);
    return (
        <div className="flex" >
            <h1 className="text-icarus-5 text-lg">Estado - Logs</h1>
            <textarea
                className="mb-2 w-full h-20 resize-none bg-icarus-1 border-icarus-5 text-icarus-3 border-2 rounded-lg"
                name="Logs"
                id="logs"
                defaultValue={serialData.map((line, index) => ">" + line)}
            ></textarea>
        </div>
    )
}
export default LogStatus;