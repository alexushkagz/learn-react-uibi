import {useMemo} from 'react';

export const usePagination = (pageCount) => {
    return useMemo(() => {
		let result = []
		for (let i = 0; i < pageCount; i++) {
			result.push(i + 1);
		}
		return result;
	}, [pageCount])
}