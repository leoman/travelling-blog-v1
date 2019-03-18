import React, { PureComponent } from 'react';
import textInsert from '../../utils/textInsert';
import { Wrapper, Panel, Navigation, List, ListItem, PanelWrapper, Textarea, RenderedPanel } from './styles';

interface EditorProps {
    onChange(content: string): void;
    value?: string;
}

interface EditorState {
    content: string;
    viewMode: ViewModes;
}

enum ViewModes {
    Code = "Code",
    View = "View",
    Split = "Split",
}

class Editor extends PureComponent <EditorProps, EditorState> {

    private $editor = React.createRef<HTMLTextAreaElement>();

    constructor(props: any) {
        super(props);

        this.state = {
            content: props.value || '',
            viewMode: ViewModes.Split,
        }
    }

    onChange = (content: string) => {
        this.setState({ content });
        this.props.onChange(content);
    }

    insert = (e: React.MouseEvent<HTMLElement>) => {
        const { $editor } = this;

        if (!$editor.current) return null;

        const type = e.currentTarget ? e.currentTarget.getAttribute('data-type') : e;
        textInsert($editor.current, type);
        this.onChange($editor.current.value);
    }

    viewMode = (viewMode: ViewModes) => {
        this.setState({ viewMode })
    }

    render() {

        const { content, viewMode } = this.state;

        return (
            <Wrapper>
                <Navigation>
                    <List>
                        <ListItem data-type="h1" onClick={this.insert} title="H1">H1</ListItem>
                        <ListItem data-type="h2" onClick={this.insert} title="H2">H2</ListItem>
                        <ListItem data-type="h3" onClick={this.insert} title="H3">H3</ListItem>
                        <ListItem data-type="h4" onClick={this.insert} title="H4">H4</ListItem>
                        <ListItem data-type="image" onClick={this.insert} title="Image"><i className="foricon for-image" /></ListItem>
                        <ListItem data-type="link" onClick={this.insert} title="Link">
                            <i className="foricon for-link" />
                        </ListItem>
                        <ListItem data-type="p" onClick={this.insert} title="P">P</ListItem>
                        <ListItem data-type="br" onClick={this.insert} title="Blank Line">Blank</ListItem>

                        <ListItem onClick={() => this.viewMode(ViewModes.Code)}>Code</ListItem>
                        <ListItem onClick={() => this.viewMode(ViewModes.View)}>View</ListItem>
                        <ListItem onClick={() => this.viewMode(ViewModes.Split)}>Split</ListItem>
                    </List>
                    
                </Navigation>

                <PanelWrapper>

                    <Panel show={viewMode === ViewModes.Split || viewMode === ViewModes.Code}> 
                        
                        <Textarea ref={this.$editor} value={content} onChange={(e: React.FormEvent<HTMLTextAreaElement>) => this.onChange(e.currentTarget.value)} />
                        
                    </Panel>

                    <Panel show={viewMode === ViewModes.Split || viewMode === ViewModes.View}>
                        <RenderedPanel>
                            <span dangerouslySetInnerHTML={{ __html: content }} />
                        </RenderedPanel>
                    </Panel>

                </PanelWrapper>
            </Wrapper>
        )
    }

};

export default Editor;
