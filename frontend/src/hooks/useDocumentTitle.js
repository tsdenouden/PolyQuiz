import { useEffect } from "react"

const useDocumentTitle = (title) => {
    useEffect(() => {
        // set custom document title
        document.title = `PolyQuiz`
        if (title) document.title = `${title} - PolyQuiz`
    }, [title])
}

export default useDocumentTitle