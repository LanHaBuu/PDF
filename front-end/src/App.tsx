import axios from "axios"
import React, { useEffect, useState } from "react"
import { Document, Page } from "react-pdf"

interface Test {
	numPages: any
}

const App: React.FC = () => {
	const [file, setFile] = useState<any>()
	useEffect(() => {
		const get = async () => {
			// const res = await axios.get("pdf", {
			// 	responseType: "blob",
			// 	headers: {
			// 		Accept: "application/pdf",
			// 	},
			// })
			// setFile(res.data)
			const res = await axios.get("pdf")
			setFile(res)
		}
		get()
	}, [])

	const [numPages, setNumPages] = useState<any>()
	const [pageNumber, setPageNumber] = useState(1)

	// const handleClick = () => {
	// 	const newFile = new Blob([file], {type: 'application/pdf'});
	// 	var fileURL = URL.createObjectURL(newFile);
	// 	window.open(fileURL);
	// }

	const onDocumentLoadSuccess = ({ numPages }: { numPages: any }): void => {
		setNumPages(numPages)
		setPageNumber(1)
	}

	return (
		<div className='App'>
			<Document file={file?.data} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
			{/* <button onClick={handleClick}>Click me</button> */}
		</div>
	)
}

export default App
