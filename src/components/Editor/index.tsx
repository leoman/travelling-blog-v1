import React, { PureComponent } from 'react';
import textInsert from '../../utils/textInsert';
import { Wrapper, Panel, Navigation, List, ListItem, PanelWrapper, Textarea, RenderedPanel } from './styles';

interface EditorProps {
    onChange(content: string): void;
    value?: string;
}

interface EditorState {
    content: string;
}

class Editor extends PureComponent <EditorProps, EditorState> {

    // View modes - plain HTML, Rendered HTML

    private $editor = React.createRef<HTMLTextAreaElement>();
    // private $editor = React.createRef<any>();

    constructor(props: any) {
        super(props);

        this.state = {
            content: props.value || '',
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

    render() {

        const { content } = this.state;

        console.log(content);

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
                    </List>
                    
                </Navigation>

                <PanelWrapper>

                    <Panel> 
                        
                        <Textarea ref={this.$editor} value={content} onChange={(e: React.FormEvent<HTMLTextAreaElement>) => this.onChange(e.currentTarget.value)} />
                        
                    </Panel>

                    <Panel>
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
