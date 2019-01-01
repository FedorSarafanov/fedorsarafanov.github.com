---
title: "Исходники иллюстрации"
type: "notpost"
aliases:
    - /cook/gallery/pre
---
<!-- <a class="imag2" href="/cook/gallery/pre.tex"><img src="/cook/gallery/pre.pdf.jpg" alt=""></a> -->
<a href="/cook/gallery/pre.tex">Скачать ```.tex``` исходник</a>
```tex
\usepackage{cmap}
\usepackage[T2A]{fontenc}
\usepackage[utf8x]{inputenc}

\usepackage[mode=buildnew]{standalone}

\usepackage
	{
		amssymb,
		% misccorr,
		amsfonts,
		amsmath,
		amsthm,
		wrapfig,
		makecell,
		multirow,
		indentfirst,
		ulem,
		graphicx,
		subcaption,
		float,
		tikz,
		caption,
		tikz-3dplot,
		csvsimple,
		color,
		booktabs,
		pgfplots,
		pgfplotstable,
		fancyhdr,
	}  


\usepackage[outline]{contour}

\usepackage[europeanresistors,americaninductors]{circuitikz}
\tikzset{
  pics/carc/.style args={#1:#2:#3}{
    code={
      \draw[pic actions] (#1:#3) arc(#1:#2:#3);
    }
  }
}

\linespread{1.3} 
\frenchspacing 

 
\usetikzlibrary
	{
		decorations.pathreplacing,
		decorations.pathmorphing,
		patterns,
		calc,
		scopes,
		arrows,
		fadings,
		through,
		shapes.misc,
		arrows.meta,
		3d,
		quotes,
		angles,
		babel
	}


\tikzset{
	force/.style=	{
		>=latex,
		draw=blue,
		fill=blue,
				 	}, 
	%				 	
	axis/.style=	{
		densely dashed,
		gray,
		font=\small,
					},
	%
	acceleration/.style={
		>=open triangle 60,
		draw=magenta,
		fill=magenta,
					},
	%
	inforce/.style=	{
		force,
		double equal sign distance=2pt,
					},
	%
	interface/.style={
		pattern = north east lines, 
		draw    = none, 
		pattern color=gray!60,
					},
	cross/.style=	{
		cross out, 
		draw=black, 
		minimum size=2*(#1-\pgflinewidth), 
		inner sep=0pt, outer sep=0pt,
					},
	%
	cargo/.style=	{
		rectangle, 
		fill=black!70, 
		inner sep=2.5mm,
					},
	%
	caption/.style= {
		midway,
		fill=white!20, 
		opacity=0.9
					},
	%
	}


\newcommand{\irodov}[1]{\geometry{left=1cm,right=1cm,top=2cm,bottom=1.5cm,bindingoffset=0cm}
\pagestyle{fancy}\fancyhead{}\fancyhead[C]{МКТ}\fancyhead[R]{Сарафанов Ф.Г.}  \fancyhead[L]{Иродов -- №#1}\fancyfoot{} \fancyfoot[C]{\thepage}}
\newcommand{\yakovlev}[1]{\geometry{left=1cm,right=1cm,top=2cm,bottom=1.5cm,bindingoffset=0cm}
\pagestyle{fancy}\fancyhead{}\fancyhead[C]{МКТ}\fancyhead[R]{Сарафанов Ф.Г.}  \fancyhead[L]{Яковлев -- №#1}\fancyfoot{} \fancyfoot[C]{\thepage}}
\newcommand{\wrote}[1]{\geometry{left=1cm,right=1cm,top=2cm,bottom=1.5cm,bindingoffset=0cm}
\pagestyle{fancy}\fancyhead{}\fancyhead[C]{МКТ}\fancyhead[R]{Сарафанов Ф.Г.} \fancyhead[L]{Под запись -- <<#1>>}\fancyfoot{} \fancyfoot[C]{\thepage}}

\newcommand{\siv}[1]{\geometry{left=1cm,right=1cm,top=2cm,bottom=1.5cm,bindingoffset=0cm}
\pagestyle{fancy}\fancyhead{}\fancyhead[C]{МКТ}\fancyhead[R]{Сарафанов Ф.Г.} \fancyhead[L]{Сивухин -- №#1}\fancyfoot{} \fancyfoot[C]{\thepage}}




\newcommand{\irodovT}[1]{\geometry{left=1cm,right=1cm,top=2cm,bottom=1.5cm,bindingoffset=0cm}
\pagestyle{fancy}\fancyhead{}\fancyhead[C]{ТД}\fancyhead[R]{Сарафанов Ф.Г.}  \fancyhead[L]{Иродов -- №#1}\fancyfoot{} \fancyfoot[C]{\thepage}}
\newcommand{\yakovlevT}[1]{\geometry{left=1cm,right=1cm,top=2cm,bottom=1.5cm,bindingoffset=0cm}
\pagestyle{fancy}\fancyhead{}\fancyhead[C]{ТД}\fancyhead[R]{Сарафанов Ф.Г.}  \fancyhead[L]{Яковлев -- №#1}\fancyfoot{} \fancyfoot[C]{\thepage}}
\newcommand{\wroteT}[1]{\geometry{left=1cm,right=1cm,top=2cm,bottom=1.5cm,bindingoffset=0cm}
\pagestyle{fancy}\fancyhead{}\fancyhead[C]{ТД}\fancyhead[R]{Сарафанов Ф.Г.} \fancyhead[L]{Под запись -- <<#1>>}\fancyfoot{} \fancyfoot[C]{\thepage}}

\newcommand{\sivT}[1]{\geometry{left=1cm,right=1cm,top=2cm,bottom=1.5cm,bindingoffset=0cm}
\pagestyle{fancy}\fancyhead{}\fancyhead[C]{ТД}\fancyhead[R]{Сарафанов Ф.Г.} \fancyhead[L]{Сивухин -- №#1}\fancyfoot{} \fancyfoot[C]{\thepage}}

\newenvironment{tikzpict}
    {
	    \begin{figure}[htbp]
		\centering
		\begin{tikzpicture}
    }
    { 
		\end{tikzpicture}
		% \caption{caption}
		% \label{fig:label}
		\end{figure}
    }

\newcommand{\vbLabel}[3]{\draw ($(#1,#2)+(0,5pt)$) -- ($(#1,#2)-(0,5pt)$) node[below]{#3}}
\newcommand{\vaLabel}[3]{\draw ($(#1,#2)+(0,5pt)$) node[above]{#3} -- ($(#1,#2)-(0,5pt)$) }

\newcommand{\hrLabel}[3]{\draw ($(#1,#2)+(5pt,0)$) -- ($(#1,#2)-(5pt,0)$) node[right, xshift=1em]{#3}}
\newcommand{\hlLabel}[3]{\draw ($(#1,#2)+(5pt,0)$) node[left, xshift=-1em]{#3} -- ($(#1,#2)-(5pt,0)$) }



\newcommand\zi{^{\,*}_i}
\newcommand\sumn{\sum_{i=1}^{N}}


\tikzset{
	coordsys/.style={scale=1.8,x={(1.1cm,-0cm)},y={(0.5cm,1cm)}, z={(0cm,0.8cm)}},
	% coordsys/.style={scale=1.5,x={(0cm,0cm)},y={(1cm,0cm)}, z={(0cm,1cm)}}, 
	% coordsys/.style={scale=1.5,x={(1cm,0cm)},y={(0cm,1cm)}, z={(0cm,0cm)}}, 
}
\usepgfplotslibrary{units}
%Русский язык в input (если расположить раньше, будет ошибка)
% \makeatletter
%     \let\old@input\input
%     \renewcommand\input[1]{%
%         \expandafter\old@input{\detokenize{#1}}%
%     }
% \makeatother

% \usepackage{import}

% \input{\source/tikz_line-annotation.tex}

\tikzset{
  pics/carc/.style args={#1:#2:#3}{
    code={
      \draw[pic actions] (#1:#3) arc(#1:#2:#3);
    }
  },
  dash/.style={
  	dash pattern=on 5mm off 5mm
  }
}

\newcommand{\mean}[1]{\langle#1\rangle}

% Draw line annotation
% Input:
%   #1 Line offset (optional)
%   #2 Line angle
%   #3 Line length
%   #5 Line label
% Example:
%   \lineann[1]{30}{2}{$L_1$}
\newcommand{\lineann}[4][0.5]{%
    \begin{scope}[rotate=#2, blue,inner sep=2pt, ]
        \draw[dashed, blue!40] (0,0) -- +(0,#1)
            node [coordinate, near end] (a) {};
        \draw[dashed, blue!40] (#3,0) -- +(0,#1)
            node [coordinate, near end] (b) {};
        \draw[|<->|] (a) -- node[fill=white, scale=0.8] {#4} (b);
    \end{scope}
}


\pgfplotsset{
    % most recent feature set of pgfplots
    compat=newest,
}

\newcommand\ct[1]{\text{\rmfamily\upshape #1}}
% \usepackage[europeanresistors,americaninductors]{circuitikz}

\newcommand*{\const}{\ct{const}}
% Style to select only points from #1 to #2 (inclusive)
\pgfplotsset{select/.style 2 args={
    x filter/.code={
        \ifnum\coordindex<#1\def\pgfmathresult{}\fi
        \ifnum\coordindex>#2\def\pgfmathresult{}\fi
    }
}}
\usepackage{array}
```