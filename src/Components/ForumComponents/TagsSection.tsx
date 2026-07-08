import React, {useEffect, useState} from 'react';
import {Dropdown, Spinner} from "react-bootstrap";
import {useDebouncedValue} from "../../Hooks/useDebouncedValue.ts";
import useFetchTags from "../../Hooks/Posts/useFetchTags.ts";
import DeleteCross from '../../assets/remove-survey-option.svg'

interface TagsSection {
    setTags: React.Dispatch<React.SetStateAction<string[]>>
    tags: string[];
}

const TagsSection:React.FC<TagsSection> = ({setTags, tags}) => {

    const [tagSearch, setTagSearch] = useState('');
    const debouncedTagSearch = useDebouncedValue(tagSearch, 500);

    const [showSuggestions, setShowSuggestions] = useState(false)

    const {data:fetchedTags, isLoading, refetch} = useFetchTags(debouncedTagSearch);

    const addTag = (tag: string) => {
        setTags(p => [...p, tag])
        setTagSearch('');
    }

    const handleRemoveTag = (tag:string) => {
        setTags(p => p.filter(t => t !== tag))
    }

    useEffect(() => {
        if (debouncedTagSearch === '') {
            return
        }
        refetch()
    }, [debouncedTagSearch, refetch]);

    return (
        <div className="modal-input-group">
            <label htmlFor="tags-selector">Tags</label>
            <div className="dropdown-group">
                <Dropdown id='tag-selector' show={!!fetchedTags && debouncedTagSearch !== '' && showSuggestions}>
                    <input
                        className='input-border'
                        type="text"
                        value={tagSearch}
                        onChange={(e) => setTagSearch(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    {
                        tagSearch.length > 0 &&
                        <button onClick={() => addTag(tagSearch)}>add</button>
                    }
                    <Dropdown.Menu>
                        {
                            fetchedTags?.data?.data?.tags?.map(tag =>
                                <Dropdown.Item
                                    key={tag}
                                    onClick={() => addTag(tag)}
                                >
                                    {tag}
                                </Dropdown.Item>
                            )
                        }
                        {
                            fetchedTags?.data?.data?.tags?.length === 0 &&
                                <Dropdown.Item >
                                    No suggestions
                                </Dropdown.Item>

                        }
                        {
                            isLoading &&
                            <Spinner animation='border'/>
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            {
                tags.length > 0 &&
                <div className="tags-display">
                    {
                        tags.map(tag => <div className='signle-tag' key={tag}>#{tag} <button onClick={() => handleRemoveTag(tag)}><img src={DeleteCross} alt=""/></button></div>)
                    }
                </div>
            }
        </div>
    );
};

export default TagsSection;