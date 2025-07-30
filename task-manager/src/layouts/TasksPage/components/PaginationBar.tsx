import { useEffect, useState } from "react";

export type PageInfo = {
  pageNumber: number,
  totalPages: number,
  size: number
};

type paginationProps = {
  pageInfo: PageInfo;
  onPageInfoChange: (pageInfo: PageInfo) => void;
  isLoading?: boolean;
}

export const PaginationBar: React.FC<paginationProps> = ({ pageInfo, onPageInfoChange, isLoading = false }) => {

  let maxSelectablePageLabelSize: number = 3;
  const [selectablePageLabels, setSelectablePageLabels] = useState<number[]>([]);
  const [currentPageLabel, setCurrentPageLabel] = useState<number>(1);

  const initSelectablePagesLabels = () => {

    let totalPages: number = pageInfo.totalPages;

    let pageLabels: number[] = [];

    if (totalPages <= 1) return;

    maxSelectablePageLabelSize = Math.min(maxSelectablePageLabelSize, totalPages);

    pageLabels = Array.from({ length: maxSelectablePageLabelSize }, (_, i) => i + 1);

    setSelectablePageLabels(pageLabels);

  };

  const next = () => {
    const totalPages: number = pageInfo.totalPages;
    const maxLabel: number = Math.max(...selectablePageLabels);
    let pageLabels: number[] = [];

    if (maxLabel < totalPages) {
      pageLabels = selectablePageLabels.map(label => label + 1);
      setSelectablePageLabels(pageLabels);
    }
  };

  const previous = () => {
    let pageLabels: number[] = [];
    const minLabel: number = Math.min(...selectablePageLabels);
    if (minLabel > 1) {
      pageLabels = selectablePageLabels.map(label => label - 1);
      setSelectablePageLabels(pageLabels);
    }
  };

  // handle page info change event
  const handlePageInfoChange = (data: PageInfo) => {
    onPageInfoChange(data);
  }

  const isLastPages = () => Math.max(...selectablePageLabels) === pageInfo.totalPages;

  const isFirstPages = () => Math.min(...selectablePageLabels) === 1;

  useEffect(() => {
    setCurrentPageLabel(1);
    initSelectablePagesLabels();
  }, []);

  return (
    <nav aria-label='Task pages'>
      <ul className='pagination'>
        <li className={`page-item ${isLoading || isFirstPages() ? 'disabled' : ''}`}>
          <a
            className='page-link'
            href='#'
            onClick={(e) => {
              e.preventDefault();
              if (!isLoading) previous();
            }}>
            Previous
          </a>
        </li>
        {
          selectablePageLabels.map(
            (label, index) =>
              <li className={`page-item ${currentPageLabel === label ? 'active' : ''} ${isLoading ? 'disabled' : ''}`}
                aria-current={currentPageLabel == label ? 'page' : undefined}
                key={index}>
                <a
                  className='page-link'
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (isLoading) return;
                    setCurrentPageLabel(label);
                    handlePageInfoChange({ ...pageInfo, pageNumber: label - 1 });
                  }
                  }
                >{label}</a>
              </li>
          )
        }
        <li className={`page-item ${isLoading || isLastPages() ? 'disabled' : ''}`}>
          <a
            className='page-link'
            href='#'
            onClick={(e) => {
              e.preventDefault();
              if (!isLoading) next();
            }}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}