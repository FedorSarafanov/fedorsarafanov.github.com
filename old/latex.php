			<style>
			#text{
				width: 100%;	
				height: 100%;
				border-color: #ddd !important;
				font-size: 1.5em;
				margin-bottom: -50px;
			}
	
			</style>
			<div id="text"><?php //echo exec('uname -a');?>\usepackage{amsmath}
\title{\LaTeX}
\date{}
\begin{document}
  \maketitle
  \LaTeX{} is a document preparation system for the \TeX{}
  typesetting program. It offers programmable desktop publishing
  features and extensive facilities for automating most aspects of
  typesetting and desktop publishing, including numbering and
  cross-referencing, tables and figures, page layout, bibliographies,
  and much more. \LaTeX{} was originally written in 1984 by Leslie
  Lamport and has become the dominant method for using \TeX; few
  people write in plain \TeX{} anymore. The current version  is
  \LaTeXe.
 
  % This is a comment; it will not be shown in the final output.
  % The following shows a little of the typesetting power of LaTeX:
  \begin{align}
    E &= mc^2                              \\
    m &= \frac{m_0}{\sqrt{1-\frac{v^2}{c^2}}}
  \end{align}
\end{document}</div>
			    
			<script src="ace-builds/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
			<script>
			    var editor = ace.edit("text");
			    editor.setTheme("ace/theme/chrome");
			    editor.getSession().setMode("ace/mode/latex");
			</script>
			<script>
				var code = editor.getSession().getValue()

			</script>